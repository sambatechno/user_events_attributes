---
layout: page
title: User Attributes Reference
permalink: /user-attributes.html
---

# User Attributes Reference

This page provides a detailed reference for user attributes. For the complete and up-to-date list of all user attributes, please refer to the [main documentation](index.html). For the authoritative list of every field pushed to Netcore by the daily sync, see [Netcore Export Attributes](netcore-attributes.html).

## 📊 Attribute Categories Overview

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
- **Payment Methods**: How they pay, including the card brand (`last_payment_card_brand`)

### User Experience
- **App Language**: Localization preferences (coming soon)

## 🔄 Data Updates

Our system automatically updates these attributes:
- **Daily**: All attributes are pushed to Netcore once per day at 05:00 (Asia/Singapore) — order information, loyalty tier calculations, point balance updates, purchase pattern analysis, and customer segmentation.

## 📖 Complete Documentation

For the complete list of all user attributes with detailed descriptions, types, and business use cases, please visit the [main documentation page](index.html).

---

**Last Updated**: 5 Jun 2026  
**Data Source**: CATA Customer Data Platform
