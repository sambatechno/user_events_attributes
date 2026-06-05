---
layout: page
title: Netcore Export Attributes
permalink: /netcore-attributes.html
---

# Netcore Export Attributes

This page lists **every attribute pushed to Netcore** by the daily sync.

## 🔄 How the sync works

- **Pipeline**: the `attributes_push_netcore` Airflow DAG.
- **Schedule**: once per day at **05:00 Asia/Singapore** (`0 5 * * *`), per tenant.
- **Flow**: read each tenant's `NETCORE_APIKEY` setting → if present, export the
  attributes from `data_user_attributes` → upload a CSV to Google Cloud
  Storage → call the Netcore `contact / bulkupload` API → update the last sync
  time. Only rows whose `updated_at` is newer than the last successful sync are
  sent (incremental).
- **Separate DAG**: `voucher_available_attributes_push_netcore` pushes one extra
  field (`voucher_available`).

> **Source of truth**: the export query
> `dags/cata/sql/attributes_push_netcore/get_all_data.sql` in the
> `cata-airflow` repository. If this page and that query disagree, the query
> wins.

The **Netcore Export Name** is the column header sent in the CSV. When it
differs from the underlying database column, the **Source Column** is shown.

---

## 1. Customer Identification & Profile

| Netcore Export Name | Type | Source Column | Description |
|---------------------|------|---------------|-------------|
| `userid` | varchar(50) | `internal_id` | App customer unique ID |
| `customer_uuid` | varchar(50) | `internal_id` | Same value as `userid` |
| `registration_at` | date | `registration_at` | Registration date (tenant timezone) |
| `firstname` | varchar(255) | `first_name` | First name (empty string if null) |
| `lastname` | varchar(255) | `last_name` | Last name (empty string if null) |
| `mobile` | varchar(255) | `phone_number` | Mobile number with the `+` prefix removed |
| `email_verified_at` | date | `email_verified_at` | Date the email was verified |
| `customer_deleted_at` | date | `customer_deleted_at` | Date the account was deleted |
| `is_deleted` | tinyint(1) | `is_deleted` | 0 = active, 1 = deleted |
| `data_source` | varchar(10) | constant `'APP'` | Always `APP` — identifies the data source |

> **EMAIL** is mapped separately from the `customers` table to Netcore's
> built-in EMAIL attribute, so it is not part of this query.

---

## 2. Loyalty Points — Legacy (backward compatibility)

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `point_balance` | int | Current points balance (use `loyalty_points_balance`) |
| `point_earned` | int | Lifetime points earned (use `loyalty_points_earned`) |
| `point_voucher_redeemed` | int | Points spent on vouchers (use `loyalty_points_voucher_redeemed`) |
| `point_order_redeemed` | int | Points spent on orders (use `loyalty_points_order_redeemed`) |

---

## 3. Loyalty Points — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `loyalty_points_balance` | int | Currently available loyalty points |
| `loyalty_points_earned` | int | Lifetime points earned |
| `loyalty_points_voucher_redeemed` | int | Lifetime points spent on vouchers |
| `loyalty_points_order_redeemed` | int | Lifetime points spent on orders |
| `loyalty_points_expiry_balance` | int | Points expiring by end of the current loyalty period |
| `loyalty_points_expiry_date` | date | Date those points expire |

---

## 4. Loyalty Stamps — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `loyalty_stamps_to_earn_reward` | int | Total stamps required for a reward (back-office config) |
| `loyalty_stamps_balance` | int | Stamps currently in the wallet |
| `loyalty_stamps_required` | int | Stamps still needed to earn the reward |

---

## 5. Loyalty Tier

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `tier_name` | varchar(30) | Last known tier name (e.g. Bronze, Silver, Gold) |
| `tier_end_date` | date | Last known tier membership end date |

---

## 6. Order Counts — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `orders_count_7d` | int | Orders in the last 7 days |
| `orders_count_14d` | int | Orders in the last 14 days |
| `orders_count_30d` | int | Orders in the last 30 days |
| `orders_count_60d` | int | Orders in the last 60 days |
| `orders_count_90d` | int | Orders in the last 90 days |
| `orders_count_180d` | int | Orders in the last 180 days |
| `orders_count_365d` | int | Orders in the last 365 days |
| `orders_count_total` | int | Lifetime number of successful orders |

---

## 7. Active Member Indicators — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `is_active_member_l30d` | tinyint(1) | Has orders in the last 30 days |
| `is_active_member_l60d` | tinyint(1) | Has orders in the last 60 days |
| `is_active_member_l90d` | tinyint(1) | Has orders in the last 90 days |
| `is_active_member_l180d` | tinyint(1) | Has orders in the last 180 days |

---

## 8. Order Dates — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `first_order_date` | date | First order date (tenant timezone) |
| `last_order_date` | date | Last order date (tenant timezone) |

---

## 9. Order Frequency Metrics — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `orders_count_avg_month` | decimal(8,2) | Average orders per calendar month since first order |
| `orders_count_avg_week` | decimal(8,2) | Average orders per calendar week since first order |
| `orders_count_avg_year` | decimal(8,2) | Average orders per calendar year since first order |

---

## 10. Recency Metric — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `days_since_last_order` | int | Days since last order — calculated live on every push, not stored |

---

## 11. Average Order Value — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `avg_order_value` | decimal(12,2) | Lifetime average order value |
| `avg_order_value_l30d` | decimal(12,2) | Average order value, last 30 days |
| `avg_order_value_l60d` | decimal(12,2) | Average order value, last 60 days |
| `avg_order_value_l90d` | decimal(12,2) | Average order value, last 90 days |
| `avg_orders_value_90d` | decimal(12,2) | Backward-compat duplicate of `avg_order_value_l90d` |
| `avg_order_value_l180d` | decimal(12,2) | Average order value, last 180 days |
| `avg_order_value_l365d` | decimal(12,2) | Average order value, last 365 days |
| `avg_items_per_order_90d` | decimal(8,2) | Average items per order, last 90 days (legacy) |

---

## 12. Financial Metrics

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `total_spend` | decimal(12,2) | Lifetime spend (legacy, use `total_spent`) |
| `total_purchase` | int | Lifetime purchases (legacy, use `orders_count_total`) |
| `total_spent` | decimal(12,2) | Lifetime spend for tiering / CLV modelling |

---

## 13. Store & Payment

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `last_store_code` | varchar(200) | Code of the store of last purchase |
| `last_store_name` | varchar(255) | Name of the store of last purchase |
| `most_store_code` | varchar(200) | Code of the most-visited store |
| `most_store_name` | varchar(255) | Name of the most-visited store |
| `last_payment_method` | varchar(200) | Last payment method (`scheme` is normalised to `card`) |
| `last_payment_card_brand` | varchar(50) | Card brand of last payment |

---

## 14. PMIX (Product Mix)

| Netcore Export Name | Type | Source Column | Description |
|---------------------|------|---------------|-------------|
| `category_purchased` | varchar(500) | `pmix_top_categories_90d` | Legacy alias for top categories (90d) |
| `product_purchased` | varchar(500) | `top_items_90d` | Legacy alias for top items (90d) |
| `pmix_top_categories_90d` | varchar(500) | `pmix_top_categories_90d` | Top categories purchased, last 90 days (pipe-separated) |
| `top_items_90d` | varchar(500) | `top_items_90d` | Top items purchased, last 90 days (pipe-separated) |
| `pmix_top_1_category_l90d` | varchar(200) | | Top 1 ordered category, last 90 days |
| `pmix_top_3_categories_l90d` | varchar(200) | | Top 3 ordered categories, last 90 days |
| `pmix_top_1_item_l90d` | varchar(200) | | Top 1 ordered item, last 90 days |
| `pmix_top_3_items_l90d` | varchar(200) | | Top 3 ordered items, last 90 days |
| `pmix_favorite_items` | varchar(200) | | Items added via the "Favorite" feature (pipe-separated) |

---

## 15. Top Spender Rankings

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `top_spender_ltv` | int | Lifetime-value spending rank (1-50), `-1` if not ranked |
| `top_spender_last30d` | int | Last-30-day spending rank (1-50), `-1` if not ranked |
| `top_spender_last90d` | int | Last-90-day spending rank (1-50), `-1` if not ranked |

---

## 16. Voucher Attributes — Attributes 2.1

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `voucher_order_rate` | decimal(8,4) | Share of past orders placed using vouchers (0-1) |
| `voucher_collection_total` | int | Total vouchers received |
| `voucher_redemption_total` | int | Total vouchers redeemed |
| `voucher_redemption_rate` | decimal(8,4) | Redeemed / collected |
| `avg_discount_per_order` | decimal(12,2) | Average monetary benefit per order |
| `voucher_available_count` | int | Active vouchers in the wallet |
| `voucher_last_used_date` | date | Date of last voucher usage (tenant timezone) |
| `voucher_near_expiry_days` | int | Targets customers with vouchers expiring within x days |

---

## 17. Voucher Available (separate DAG)

| Netcore Export Name | Type | Description |
|---------------------|------|-------------|
| `voucher_available` | varchar(500) | Available voucher codes, comma-separated |

> Exported by the `voucher_available_attributes_push_netcore` DAG — it carries
> the actual voucher codes, not just the `voucher_available_count` number.

---

## 📊 Field Count Summary

| Category | Count |
|----------|-------|
| Customer Identification & Profile | 10 |
| Loyalty Points (Legacy) | 4 |
| Loyalty Points (2.1) | 6 |
| Loyalty Stamps (2.1) | 3 |
| Loyalty Tier | 2 |
| Order Counts (2.1) | 8 |
| Active Member Indicators (2.1) | 4 |
| Order Dates (2.1) | 2 |
| Order Frequency Metrics (2.1) | 3 |
| Recency Metric (2.1) | 1 |
| Average Order Value (2.1) | 8 |
| Financial Metrics | 3 |
| Store & Payment | 6 |
| PMIX | 9 |
| Top Spender | 3 |
| Voucher Attributes (2.1) | 8 |
| **Total (main `attributes_push_netcore` export)** | **80** |
| Voucher Available (separate DAG) | 1 |

---

## 📝 Notes

- **Dates** are exported as `DATE` (no time component).
- **Booleans** are exported as `TINYINT(1)` (0/1).
- **Null strings** are exported as empty strings (`''`).
- `app_language` and `external_id` are **not** exported — `app_language` is
  commented out in the export query (not yet tracked) and `external_id` is not
  part of the export.

---

**Data Source**: CATA Customer Data Platform · `data_user_attributes`
