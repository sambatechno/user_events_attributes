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
| `internal_id` | Text (50 chars) | Unique internal user ID | User identification |
| `external_id` | Text (50 chars) | External system user ID | Third-party integration |
| `registration_at` | Date & Time | When user registered | User lifecycle analysis |
| `app_language` | Text (10 chars) | User's preferred language | Localization & UX |
| `point_balance` | Number | Current loyalty points | Loyalty program management |
| `point_earned` | Number | Total points earned | Loyalty program analytics |
| `point_voucher_redeemed` | Number | Points used for vouchers | Redemption tracking |
| `point_order_redeemed` | Number | Points used for orders | Redemption tracking |
| `first_order_at` | Date & Time | User's first purchase | Customer acquisition |
| `last_order_at` | Date & Time | Most recent purchase | Customer engagement |
| `total_spend` | Decimal | Total amount spent | Revenue analysis |
| `total_purchase` | Number | Total number of purchases | Purchase frequency |
| `category_purchased` | Text (200 chars) | Product categories bought | Product preferences |
| `product_purchased` | Text (200 chars) | Specific products bought | Product preferences |
| `last_store_code` | Text (200 chars) | Store of last purchase | Store performance |
| `most_store_code` | Text (200 chars) | Most visited store | Store preferences |
| `last_payment_method` | Text (200 chars) | Payment method used | Payment preferences |
| `tier_name` | Text (30 chars) | Current loyalty tier | Loyalty program status |
| `tier_end_date` | Date | Tier expiration date | Loyalty program management |
| `created_at` | Timestamp | Record creation time | Data tracking |
| `updated_at` | Timestamp | Last update time | Data freshness |

### Planned Attributes (Not Yet Implemented)

| Attribute | Type | Description | Business Use |
|-----------|------|-------------|--------------|
| `last_payment_card_brand` | Text (10 chars) | Card brand (visa, mc, amex, etc.) | Payment analytics |
| `is_account_deleted` | Boolean | Account deletion status | Data privacy compliance |

## 🎯 Key Attribute Categories

### Customer Identification
- **Internal ID**: Our system's unique identifier for each user
- **External ID**: Links to external systems and third-party platforms
- **Registration Date**: When the customer first joined our platform

### Loyalty Program
- **Point Balance**: Current available loyalty points
- **Points Earned**: Lifetime points accumulated
- **Points Redeemed**: How customers use their points
- **Loyalty Tier**: Current membership level
- **Tier Expiration**: When the current tier expires

### Purchase Behavior
- **First Order**: Customer acquisition date
- **Last Order**: Most recent engagement
- **Total Spend**: Lifetime value
- **Purchase Count**: Engagement frequency
- **Product Categories**: What they buy
- **Store Preferences**: Where they shop
- **Payment Methods**: How they pay
- **Payment Card Brands**: Card type preferences (visa, mc, amex, etc.)

### User Experience
- **App Language**: Localization preferences
- **Store Locations**: Shopping patterns

## 📈 Business Applications

### Customer Segmentation
Use these attributes to segment customers by:
- **Value**: High, medium, low spenders
- **Engagement**: Active, inactive, churned
- **Loyalty**: Tier levels and point balances
- **Preferences**: Product categories, stores, payment methods

### Marketing Campaigns
Target customers based on:
- **Purchase History**: Recent buyers, high-value customers
- **Loyalty Status**: Tier-specific promotions
- **Geographic**: Store-based campaigns
- **Behavioral**: Category preferences

### Customer Retention
Identify at-risk customers through:
- **Inactivity**: Time since last order
- **Tier Expiration**: Approaching downgrades
- **Point Balance**: Low engagement indicators

### Product Development
Understand customer needs via:
- **Category Preferences**: Popular product types
- **Store Patterns**: Shopping behavior
- **Payment Methods**: Transaction preferences

## 🔄 Data Updates

Our system automatically updates these attributes:

### **Loyalty Program Updates** - Every 30 minutes
- **Point Balance**: Current available loyalty points
- **Points Earned**: Lifetime points accumulated  
- **Points Redeemed**: Voucher and order redemptions
- **Loyalty Tier**: Current membership level
- **Tier Expiration**: Tier expiration dates

### **Order Processing** - Every hour
- **First Order**: Customer acquisition tracking
- **Last Order**: Most recent purchase updates
- **Total Spend**: Lifetime value calculations
- **Total Purchase**: Purchase frequency updates
- **Category Purchased**: Product category preferences
- **Product Purchased**: Specific product preferences
- **Last Store Code**: Store of last purchase
- **Most Store Code**: Most visited store analysis
- **Last Payment Method**: Payment method preferences

### **Registration Processing** - Every hour
- **Registration Date**: New user onboarding
- **Internal ID**: User identification setup
- **External ID**: Third-party system integration
- **App Language**: Localization preferences

### **Marketing Data Sync** - Daily at 2:00 AM
- **Campaign Data**: Marketing platform synchronization
- **Customer Segmentation**: Updated segment data
- **Campaign Performance**: Marketing analytics updates

## 🚀 System Integration

Our user attributes are automatically synchronized across all business systems:

### **Real-Time Updates**
- **Loyalty Points**: Updated every 30 minutes for immediate customer feedback
- **Order Information**: Processed every hour to track customer behavior
- **User Registration**: Captured every hour for new customer onboarding

### **Marketing Integration**
- **Campaign Data**: Synchronized daily for marketing automation
- **Customer Segments**: Updated daily for targeted campaigns
- **Performance Tracking**: Real-time campaign effectiveness monitoring

### **Data Quality Assurance**
- **Automated Validation**: Continuous data accuracy checks
- **Business Monitoring**: Real-time alerts for data issues
- **Performance Tracking**: System health and data freshness monitoring

## 📊 Reporting & Analytics

### Standard Reports Available
- Customer lifetime value analysis
- Loyalty program performance
- Store performance comparison
- Product category trends
- Customer acquisition and retention

### Custom Analytics
- Segment-specific insights
- Campaign performance tracking
- Predictive customer behavior
- Revenue forecasting

## 🔒 Data Privacy & Security

- All personal identifiable information is anonymized
- Data access is restricted to authorized personnel
- Regular security audits and compliance checks
- Data retention policies ensure proper lifecycle management

## 📞 Support & Questions

For questions about user attributes or data access:
- **Email**: support@trycata.com
- **Documentation**: This page and related guides
- **Technical Support**: Contact your system administrator

---

**Last Updated**: January 2024  
**Data Source**: CATA Customer Data Platform
