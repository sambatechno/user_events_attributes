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

The following table lists all user attributes available in our system:

> **Note**: Planned attributes are listed in a separate section at the bottom and are not yet implemented in the current system.

| Attribute | Type | Description | Business Use |
|-----------|------|-------------|--------------|
| `id` | Auto-increment | Unique system identifier | Internal tracking |
| `internal_id` | Text (50 chars) | App customer unique ID | User identification |
| `external_id` | Text (50 chars) | External system user ID (currently not supported) | Third-party integration |
| `registration_at` | Date & Time | When user registered | User lifecycle analysis |
| `app_language` | Text (10 chars) | User's preferred language (coming soon) | Localization & UX |
| `point_balance` | Number | Last current balance known (not real time) | Loyalty program management |
| `point_earned` | Number | Total points earned (lifetime) | Loyalty program analytics |
| `point_voucher_redeemed` | Number | Points used for vouchers (lifetime) | Redemption tracking |
| `point_order_redeemed` | Number | Points used for orders (lifetime) | Redemption tracking |
| `first_order_at` | Date & Time | User's first purchase | Customer acquisition |
| `last_order_at` | Date & Time | Most recent purchase | Customer engagement |
| `total_spend` | Decimal | Total amount spent | Revenue analysis |
| `total_purchase` | Number | Total number of purchases | Purchase frequency |
| `category_purchased` | Text (200 chars) | Product categories bought | Product preferences |
| `product_purchased` | Text (200 chars) | Specific products bought | Product preferences |
| `last_store_code` | Text (200 chars) | Store of last purchase | Store performance |
| `most_store_code` | Text (200 chars) | Most visited store | Store preferences |
| `last_payment_method` | Text (200 chars) | Payment method used | Payment preferences |
| `tier_name` | Text (30 chars) | Last known tier name (e.g. Bronze, Silver, Gold) | Loyalty program status |
| `tier_end_date` | Date | Last known tier membership end | Loyalty program management |
| `created_at` | Timestamp | Record creation time | Data tracking |
| `updated_at` | Timestamp | Last update time | Data freshness |

### Planned Attributes (Not Yet Implemented)

| Attribute | Type | Description | Business Use |
|-----------|------|-------------|--------------|
| `last_payment_card_brand` | Text (10 chars) | Card brand (visa, mc, amex, etc.) | Payment analytics |
| `is_account_deleted` | Boolean | Account deletion status | Data privacy compliance |

## 🎯 Key Attribute Categories

### Customer Identification
- **Internal ID**: App customer unique identifier
- **External ID**: Links to external systems (currently not supported)
- **Registration Date**: When the customer first joined our platform
- **App Language**: User's preferred language (coming soon)

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

### User Experience
- **App Language**: Localization preferences (coming soon)

## 🔄 Data Updates

Our system automatically updates these attributes:
- **Daily**: All attributes (order information, loyalty tier calculations, point balance updates, purchase pattern analysis, and customer segmentation)

## 📞 Support & Questions

For questions about user attributes or data access:
- **Email**: support@trycata.com
- **Documentation**: This page and related guides
- **Technical Support**: Contact your system administrator

---

**Last Updated**: 14 Aug 2025  
**Data Source**: CATA Customer Data Platform
