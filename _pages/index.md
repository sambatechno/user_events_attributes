---
layout: page
title: CATA User Attributes Documentation
permalink: /
---

# CATA User Attributes Documentation

Welcome to the CATA User Attributes documentation. This document provides a comprehensive overview of all user attributes tracked in our customer data platform.

## 👥 User Attributes Overview

Our system tracks comprehensive user attributes to provide insights into customer behavior, loyalty, and engagement. These attributes help us understand our customers better and provide personalized experiences.

## 📊 Complete User Attributes List

The following table lists the user attributes available in our system.

> **Netcore export**: For the authoritative, complete list of every field
> pushed to Netcore by the daily sync (~80 fields), see the
> [Netcore Export Attributes](netcore-attributes.html) page. The table below is
> a categorized overview of the most commonly used attributes.

> **Not exported to Netcore**: `external_id` (currently not supported) and
> `app_language` (not yet tracked) exist as concepts but are **not** sent to
> Netcore. `id`, `created_at` and `updated_at` are internal columns and are not
> exported.

| Attribute | Type | Description | Business Use |
|-----------|------|-------------|--------------|
| `internal_id` (→ `userid`, `customer_uuid`) | Text (50 chars) | App customer unique ID | User identification |
| `registration_at` | Date | When user registered | User lifecycle analysis |
| `point_balance` | Number | Last current balance known (not real time) | Loyalty program management |
| `point_earned` | Number | Total points earned (lifetime) | Loyalty program analytics |
| `point_voucher_redeemed` | Number | Points used for vouchers (lifetime) | Redemption tracking |
| `point_order_redeemed` | Number | Points used for orders (lifetime) | Redemption tracking |
| `loyalty_points_balance` | Number | Currently available loyalty points | Loyalty program management |
| `loyalty_points_earned` | Number | Lifetime points earned | Loyalty program analytics |
| `loyalty_points_voucher_redeemed` | Number | Lifetime points spent on vouchers | Redemption tracking |
| `loyalty_points_order_redeemed` | Number | Lifetime points spent on orders | Redemption tracking |
| `loyalty_points_expiry_balance` | Number | Points expiring this loyalty period | Retention campaigns |
| `loyalty_points_expiry_date` | Date | Date those points expire | Retention campaigns |
| `loyalty_stamps_to_earn_reward` | Number | Total stamps required for a reward | Loyalty program management |
| `loyalty_stamps_balance` | Number | Stamps currently in the wallet | Loyalty program management |
| `loyalty_stamps_required` | Number | Stamps still needed for a reward | Loyalty program management |
| `first_order_date` | Date | User's first purchase | Customer acquisition |
| `last_order_date` | Date | Most recent purchase | Customer engagement |
| `days_since_last_order` | Integer | Days since last order (calculated live) | Recency / RFM |
| `total_spend` | Decimal | Total amount spent (legacy, use `total_spent`) | Revenue analysis |
| `total_purchase` | Number | Total purchases (legacy, use `orders_count_total`) | Purchase frequency |
| `total_spent` | Decimal | Lifetime spend (tiering / CLV) | Revenue analysis |
| `orders_count_7d` … `orders_count_365d`, `orders_count_total` | Integer | Orders in 7/14/30/60/90/180/365 days and lifetime | Engagement tracking |
| `is_active_member_l30d` … `is_active_member_l180d` | Boolean | Active in last 30/60/90/180 days | Segmentation |
| `orders_count_avg_month` / `_week` / `_year` | Decimal | Average order frequency since first order | Engagement analysis |
| `avg_order_value` (+ `_l30d` … `_l365d`) | Decimal (money) | Average order value, lifetime and per window | Customer value analysis |
| `avg_orders_value_90d` | Decimal (money) | Backward-compat duplicate of `avg_order_value_l90d` | Customer value analysis |
| `avg_items_per_order_90d` | Decimal | Average items per order in last 90 days | Purchase behavior analysis |
| `category_purchased` (→ `pmix_top_categories_90d`) | Text | Top categories bought (90d) | Product preferences |
| `product_purchased` (→ `top_items_90d`) | Text | Top products bought (90d) | Product preferences |
| `pmix_top_1_category_l90d` / `pmix_top_3_categories_l90d` | Text | Top 1 / top 3 categories (90d) | Product mix analysis |
| `pmix_top_1_item_l90d` / `pmix_top_3_items_l90d` | Text | Top 1 / top 3 items (90d) | Product preference analysis |
| `pmix_favorite_items` | Text | Items added via the "Favorite" feature | Product preferences |
| `last_store_code` / `last_store_name` | Text | Store of last purchase | Store performance |
| `most_store_code` / `most_store_name` | Text | Most visited store | Store preferences |
| `last_payment_method` | Text | Payment method used (`scheme` → `card`) | Payment preferences |
| `last_payment_card_brand` | Text | Card brand of last payment | Payment preferences |
| `tier_name` | Text (30 chars) | Last known tier name (e.g. Bronze, Silver, Gold) | Loyalty program status |
| `tier_end_date` | Date | Last known tier membership end | Loyalty program management |
| `first_name` / `firstname` | Text (255 chars) | Customer's first name | Personal identification |
| `last_name` / `lastname` | Text (255 chars) | Customer's last name | Personal identification |
| `phone_number` / `mobile` | Text | Customer's mobile number (`+` removed) | Contact information |
| `email_verified_at` | Date | When user email was verified | Account verification status |
| `customer_deleted_at` | Date | When user account was deleted | Data privacy compliance |
| `is_deleted` | Boolean | Customer deletion status (0/1) | Data privacy compliance |
| `data_source` | Text | Always `APP` — identifies the data source | Source identification |
| `top_spender_ltv` | Integer | Spending rank (1-50) lifetime, -1 if not ranked | Customer value analysis |
| `top_spender_last30d` | Integer | Spending rank (1-50) last 30 days, -1 if not ranked | Recent value analysis |
| `top_spender_last90d` | Integer | Spending rank (1-50) last 90 days, -1 if not ranked | Medium-term value analysis |
| `voucher_order_rate` | Decimal | Share of orders placed with vouchers | Promotion analysis |
| `voucher_collection_total` / `voucher_redemption_total` | Integer | Vouchers received / redeemed | Promotion analysis |
| `voucher_redemption_rate` | Decimal | Redeemed / collected | Promotion analysis |
| `avg_discount_per_order` | Decimal | Average benefit per order | Promotion analysis |
| `voucher_available_count` | Integer | Active vouchers in the wallet | Promotion targeting |
| `voucher_last_used_date` | Date | Date of last voucher usage | Promotion analysis |
| `voucher_near_expiry_days` | Integer | Targets vouchers expiring within x days | Promotion targeting |
| `voucher_available` | Text | Available voucher codes (separate DAG) | Promotion targeting |

## 🎯 Key Attribute Categories

### Customer Identification
- **Internal ID**: App customer unique identifier
- **External ID**: Links to external systems (currently not supported)
- **Registration Date**: When the customer first joined our platform
- **App Language**: User's preferred language (coming soon)
- **Personal Information**: First name, last name, phone number
- **Account Status**: Email verification and account deletion tracking

### Loyalty Program
- **Point Balance**: Last known current balance (not real-time)
- **Points Earned**: Lifetime points accumulated
- **Points Redeemed**: Lifetime points used for vouchers and orders
- **Loyalty Tier**: Last known tier name (e.g. Bronze, Silver, Gold)
- **Tier Expiration**: Last known tier membership end date

### Purchase Behavior
- **First Order**: Customer acquisition date
- **Last Order**: Most recent engagement
- **Total Spend**: Lifetime value
- **Purchase Count**: Engagement frequency
- **Product Categories**: What they buy
- **Store Preferences**: Where they shop
- **Payment Methods**: How they pay (needs upgrade to know card brand)

### Recent Activity Analytics
- **30-Day Orders**: Recent engagement tracking
- **90-Day Orders**: Medium-term engagement analysis
- **Average Order Value**: 90-day spending patterns
- **Items Per Order**: 90-day purchase behavior
- **Top Categories**: Product mix analysis (90-day)
- **Top Items**: Product preference analysis (90-day)
- **Spending Rankings**: Customer rank in spending (lifetime, 30-day, 90-day)

### User Experience
- **App Language**: Localization preferences (coming soon)

## 🔄 Data Updates

Our system automatically updates these attributes:
- **Daily**: All attributes are recalculated and pushed to Netcore once per day at **05:00 (Asia/Singapore)** via the `attributes_push_netcore` pipeline. The sync is incremental — only records changed since the last run are sent.

## 📞 Support & Questions

For questions about user attributes or data access:
- **Email**: support@trycata.com
- **Documentation**: This page and related guides
- **Technical Support**: Contact your system administrator

---

**Last Updated**: 5 Jun 2026  
**Data Source**: CATA Customer Data Platform
