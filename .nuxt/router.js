import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _bd46fd4a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _35f2836f = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _4eb64cdc = () => interopDefault(import('..\\pages\\Auth\\Forgot.vue' /* webpackChunkName: "pages/Auth/Forgot" */))
const _1ce7b14a = () => interopDefault(import('..\\pages\\Auth\\Login.vue' /* webpackChunkName: "pages/Auth/Login" */))
const _74a16b52 = () => interopDefault(import('..\\pages\\Auth\\Register.vue' /* webpackChunkName: "pages/Auth/Register" */))
const _07fb07a0 = () => interopDefault(import('..\\pages\\Auth\\Reset.vue' /* webpackChunkName: "pages/Auth/Reset" */))
const _0427fd04 = () => interopDefault(import('..\\pages\\User\\my-account.vue' /* webpackChunkName: "pages/User/my-account" */))
const _18703134 = () => interopDefault(import('..\\pages\\User\\notifications.vue' /* webpackChunkName: "pages/User/notifications" */))
const _130b4df5 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-agreement.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement" */))
const _2dbb7670 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-agreement copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement copy" */))
const _02c4eba1 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-article.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-article" */))
const _3ac70d87 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-attribute.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-attribute" */))
const _0d193b1c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-brand.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-brand" */))
const _7a42b6f5 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-campaign.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-campaign" */))
const _3d0c60d6 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-case.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-case" */))
const _ed3e683a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-category.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-category" */))
const _3b5265a4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-channel.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-channel" */))
const _6d6d9f91 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-checklist.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-checklist" */))
const _e90b4f60 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-city.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-city" */))
const _afa7637a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-collection.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-collection" */))
const _1c62f5f7 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-contract.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-contract" */))
const _79fd2641 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-country.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-country" */))
const _0a03824b = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-coupon.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-coupon" */))
const _a8378514 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-currency.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-currency" */))
const _b4b9c27a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-customer.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customer" */))
const _2e41c84c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-customergroup.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customergroup" */))
const _f80dfa76 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-deepdive.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-deepdive" */))
const _b2795ff2 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-email.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-email" */))
const _074b40c2 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-emailtemplates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-emailtemplates" */))
const _d2eacf24 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-eosr.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-eosr" */))
const _2a3fc805 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-event.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-event" */))
const _164720ba = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-fullfilment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-fullfilment" */))
const _4406e4a4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-gift-certificates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-gift-certificates" */))
const _5e40c903 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-glossary.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-glossary" */))
const _c2c32350 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-invoice.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-invoice" */))
const _1a64f03a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-knowledgebase.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-knowledgebase" */))
const _3d37fdc1 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-lead.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-lead" */))
const _c54f8334 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-meeting.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-meeting" */))
const _7e101ede = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newsletter.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newsletter" */))
const _63c7e73f = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newslettersubscriber copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newslettersubscriber copy" */))
const _563da4be = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-occassion.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-occassion" */))
const _b23e2980 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-ooto.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-ooto" */))
const _7ba50d7e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-opportunity.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-opportunity" */))
const _136eef74 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-page.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-page" */))
const _0c18c273 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-partner.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-partner" */))
const _8f249328 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-pdftemplates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-pdftemplates" */))
const _3feb64f4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-permission.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-permission" */))
const _7917471a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-product.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-product" */))
const _0544cf58 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-producttype.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-producttype" */))
const _cc0abf78 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-project.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-project" */))
const _60085a32 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-quote.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-quote" */))
const _58cbc859 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-report.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-report" */))
const _35615255 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-return.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-return" */))
const _74a8b87d = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-review.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-review" */))
const _0899eecf = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-rewards.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-rewards" */))
const _5f5e7c4a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-role.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-role" */))
const _9583a608 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-schedule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-schedule" */))
const _cd995144 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-segment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-segment" */))
const _4db3d27f = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-shipment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shipment" */))
const _68c0474a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-shop.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shop" */))
const _07bb951e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-staffmembers.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-staffmembers" */))
const _a7e77308 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-state.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-state" */))
const _84fcd102 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-survey.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-survey" */))
const _50006dc5 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-tag.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-tag" */))
const _02ae6e36 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-target.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-target" */))
const _707b512c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-task.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-task" */))
const _72b44b36 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrate.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrate" */))
const _f1ebb15c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrule" */))
const _62393231 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-ticket.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-ticket" */))
const _cf2a3b94 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-visit.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-visit" */))
const _46cc322e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-warehouse.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-warehouse" */))
const _1478aa00 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-workspace.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-workspace" */))
const _12c3da11 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-zone.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-zone" */))
const _119f4bb3 = () => interopDefault(import('..\\pages\\Admin\\Content\\blog.vue' /* webpackChunkName: "pages/Admin/Content/blog" */))
const _1369e3af = () => interopDefault(import('..\\pages\\Admin\\Content\\glossary.vue' /* webpackChunkName: "pages/Admin/Content/glossary" */))
const _80d4c5fa = () => interopDefault(import('..\\pages\\Admin\\Content\\media-manager.vue' /* webpackChunkName: "pages/Admin/Content/media-manager" */))
const _206b6503 = () => interopDefault(import('..\\pages\\Admin\\Content\\pages.vue' /* webpackChunkName: "pages/Admin/Content/pages" */))
const _5e2e240b = () => interopDefault(import('..\\pages\\Admin\\Content\\projects.vue' /* webpackChunkName: "pages/Admin/Content/projects" */))
const _0c923caa = () => interopDefault(import('..\\pages\\Admin\\Content\\tags.vue' /* webpackChunkName: "pages/Admin/Content/tags" */))
const _54ab1462 = () => interopDefault(import('..\\pages\\Admin\\Content\\workspaces.vue' /* webpackChunkName: "pages/Admin/Content/workspaces" */))
const _181ba98c = () => interopDefault(import('..\\pages\\Admin\\Customers\\all-customers.vue' /* webpackChunkName: "pages/Admin/Customers/all-customers" */))
const _3079f20c = () => interopDefault(import('..\\pages\\Admin\\Customers\\leads.vue' /* webpackChunkName: "pages/Admin/Customers/leads" */))
const _e2c39df6 = () => interopDefault(import('..\\pages\\Admin\\Customers\\meetings.vue' /* webpackChunkName: "pages/Admin/Customers/meetings" */))
const _497a7e48 = () => interopDefault(import('..\\pages\\Admin\\Customers\\online-customers.vue' /* webpackChunkName: "pages/Admin/Customers/online-customers" */))
const _274cf114 = () => interopDefault(import('..\\pages\\Admin\\Customers\\opportunities.vue' /* webpackChunkName: "pages/Admin/Customers/opportunities" */))
const _0e26370d = () => interopDefault(import('..\\pages\\Admin\\Customers\\segments.vue' /* webpackChunkName: "pages/Admin/Customers/segments" */))
const _71eeddd2 = () => interopDefault(import('..\\pages\\Admin\\Customers\\social-groups.vue' /* webpackChunkName: "pages/Admin/Customers/social-groups" */))
const _4c944f00 = () => interopDefault(import('..\\pages\\Admin\\Customers\\to-do.vue' /* webpackChunkName: "pages/Admin/Customers/to-do" */))
const _25383f0b = () => interopDefault(import('..\\pages\\Admin\\Marketing\\checklists.vue' /* webpackChunkName: "pages/Admin/Marketing/checklists" */))
const _4d1b7bdb = () => interopDefault(import('..\\pages\\Admin\\Marketing\\communications.vue' /* webpackChunkName: "pages/Admin/Marketing/communications" */))
const _f9a460da = () => interopDefault(import('..\\pages\\Admin\\Marketing\\contracts.vue' /* webpackChunkName: "pages/Admin/Marketing/contracts" */))
const _55c0b997 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\events.vue' /* webpackChunkName: "pages/Admin/Marketing/events" */))
const _26a05228 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\invitations.vue' /* webpackChunkName: "pages/Admin/Marketing/invitations" */))
const _5f566a37 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\newsletter.vue' /* webpackChunkName: "pages/Admin/Marketing/newsletter" */))
const _7b3a138d = () => interopDefault(import('..\\pages\\Admin\\Marketing\\reviews.vue' /* webpackChunkName: "pages/Admin/Marketing/reviews" */))
const _5fba0a16 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\rewards.vue' /* webpackChunkName: "pages/Admin/Marketing/rewards" */))
const _4c35b062 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\seo.vue' /* webpackChunkName: "pages/Admin/Marketing/seo" */))
const _dfeac670 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\ticketing.vue' /* webpackChunkName: "pages/Admin/Marketing/ticketing" */))
const _3dd01758 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\training.vue' /* webpackChunkName: "pages/Admin/Marketing/training" */))
const _a60e34f4 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\visits.vue' /* webpackChunkName: "pages/Admin/Marketing/visits" */))
const _23cd242e = () => interopDefault(import('..\\pages\\Admin\\Reports\\calendars.vue' /* webpackChunkName: "pages/Admin/Reports/calendars" */))
const _7b2483fc = () => interopDefault(import('..\\pages\\Admin\\Reports\\cases.vue' /* webpackChunkName: "pages/Admin/Reports/cases" */))
const _b4450524 = () => interopDefault(import('..\\pages\\Admin\\Reports\\deep-dive.vue' /* webpackChunkName: "pages/Admin/Reports/deep-dive" */))
const _4c18b240 = () => interopDefault(import('..\\pages\\Admin\\Reports\\eosr.vue' /* webpackChunkName: "pages/Admin/Reports/eosr" */))
const _2b6c0c9c = () => interopDefault(import('..\\pages\\Admin\\Reports\\ooto.vue' /* webpackChunkName: "pages/Admin/Reports/ooto" */))
const _62e0e838 = () => interopDefault(import('..\\pages\\Admin\\Reports\\reports.vue' /* webpackChunkName: "pages/Admin/Reports/reports" */))
const _38c1773a = () => interopDefault(import('..\\pages\\Admin\\Reports\\statistics.vue' /* webpackChunkName: "pages/Admin/Reports/statistics" */))
const _d636045c = () => interopDefault(import('..\\pages\\Admin\\Reports\\surveys.vue' /* webpackChunkName: "pages/Admin/Reports/surveys" */))
const _2a51a03c = () => interopDefault(import('..\\pages\\Admin\\Reports\\team-scheduler.vue' /* webpackChunkName: "pages/Admin/Reports/team-scheduler" */))
const _1e09300d = () => interopDefault(import('..\\pages\\Admin\\Sales\\agreements.vue' /* webpackChunkName: "pages/Admin/Sales/agreements" */))
const _25128da0 = () => interopDefault(import('..\\pages\\Admin\\Sales\\certificates.vue' /* webpackChunkName: "pages/Admin/Sales/certificates" */))
const _41047209 = () => interopDefault(import('..\\pages\\Admin\\Sales\\credit-memos.vue' /* webpackChunkName: "pages/Admin/Sales/credit-memos" */))
const _438ac06c = () => interopDefault(import('..\\pages\\Admin\\Sales\\invoices.vue' /* webpackChunkName: "pages/Admin/Sales/invoices" */))
const _b746a96e = () => interopDefault(import('..\\pages\\Admin\\Sales\\orders.vue' /* webpackChunkName: "pages/Admin/Sales/orders" */))
const _788f7e4a = () => interopDefault(import('..\\pages\\Admin\\Sales\\quotes.vue' /* webpackChunkName: "pages/Admin/Sales/quotes" */))
const _08ad88e2 = () => interopDefault(import('..\\pages\\Admin\\Sales\\returns.vue' /* webpackChunkName: "pages/Admin/Sales/returns" */))
const _7306bc65 = () => interopDefault(import('..\\pages\\Admin\\Sales\\shipments.vue' /* webpackChunkName: "pages/Admin/Sales/shipments" */))
const _3b689e8e = () => interopDefault(import('..\\pages\\Admin\\Sales\\transactions.vue' /* webpackChunkName: "pages/Admin/Sales/transactions" */))
const _18b94d25 = () => interopDefault(import('..\\pages\\Admin\\Shop\\attributes.vue' /* webpackChunkName: "pages/Admin/Shop/attributes" */))
const _4a7f5bcc = () => interopDefault(import('..\\pages\\Admin\\Shop\\brands.vue' /* webpackChunkName: "pages/Admin/Shop/brands" */))
const _8b06012c = () => interopDefault(import('..\\pages\\Admin\\Shop\\categories.vue' /* webpackChunkName: "pages/Admin/Shop/categories" */))
const _487727b7 = () => interopDefault(import('..\\pages\\Admin\\Shop\\collections.vue' /* webpackChunkName: "pages/Admin/Shop/collections" */))
const _49156fa2 = () => interopDefault(import('..\\pages\\Admin\\Shop\\coupons.vue' /* webpackChunkName: "pages/Admin/Shop/coupons" */))
const _18424b04 = () => interopDefault(import('..\\pages\\Admin\\Shop\\inventory.vue' /* webpackChunkName: "pages/Admin/Shop/inventory" */))
const _c052c038 = () => interopDefault(import('..\\pages\\Admin\\Shop\\manufacturers.vue' /* webpackChunkName: "pages/Admin/Shop/manufacturers" */))
const _7c399f6a = () => interopDefault(import('..\\pages\\Admin\\Shop\\occassions.vue' /* webpackChunkName: "pages/Admin/Shop/occassions" */))
const _04ea4bf9 = () => interopDefault(import('..\\pages\\Admin\\Shop\\partners.vue' /* webpackChunkName: "pages/Admin/Shop/partners" */))
const _f5bf0286 = () => interopDefault(import('..\\pages\\Admin\\Shop\\product-types.vue' /* webpackChunkName: "pages/Admin/Shop/product-types" */))
const _37bc5c32 = () => interopDefault(import('..\\pages\\Admin\\Shop\\products.vue' /* webpackChunkName: "pages/Admin/Shop/products" */))
const _df8c7c42 = () => interopDefault(import('..\\pages\\Admin\\Shop\\shops.vue' /* webpackChunkName: "pages/Admin/Shop/shops" */))
const _e54e8544 = () => interopDefault(import('..\\pages\\Admin\\Shop\\warehouses.vue' /* webpackChunkName: "pages/Admin/Shop/warehouses" */))
const _2e377b70 = () => interopDefault(import('..\\pages\\Admin\\Shop\\wishlists.vue' /* webpackChunkName: "pages/Admin/Shop/wishlists" */))
const _ce853076 = () => interopDefault(import('..\\pages\\Admin\\System\\export-management.vue' /* webpackChunkName: "pages/Admin/System/export-management" */))
const _6506f4af = () => interopDefault(import('..\\pages\\Admin\\System\\general-settings.vue' /* webpackChunkName: "pages/Admin/System/general-settings" */))
const _51a5f098 = () => interopDefault(import('..\\pages\\Admin\\System\\import-management.vue' /* webpackChunkName: "pages/Admin/System/import-management" */))
const _08550b34 = () => interopDefault(import('..\\pages\\Admin\\System\\integrations.vue' /* webpackChunkName: "pages/Admin/System/integrations" */))
const _d0a3e1d0 = () => interopDefault(import('..\\pages\\Admin\\System\\knowledgebase.vue' /* webpackChunkName: "pages/Admin/System/knowledgebase" */))
const _1eecdf1d = () => interopDefault(import('..\\pages\\Admin\\System\\role-manager.vue' /* webpackChunkName: "pages/Admin/System/role-manager" */))
const _722d3eea = () => interopDefault(import('..\\pages\\Admin\\System\\settings.vue' /* webpackChunkName: "pages/Admin/System/settings" */))
const _5d3e7ec3 = () => interopDefault(import('..\\pages\\Admin\\Customers\\customer\\newcustomer.vue' /* webpackChunkName: "pages/Admin/Customers/customer/newcustomer" */))
const _140c304b = () => interopDefault(import('..\\pages\\Admin\\Edit\\providers\\id.vue' /* webpackChunkName: "pages/Admin/Edit/providers/id" */))
const _08a41f2c = () => interopDefault(import('..\\pages\\Admin\\Marketing\\Email\\email-designer.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/email-designer" */))
const _f279a122 = () => interopDefault(import('..\\pages\\Admin\\Shop\\Product\\Edit\\_id.vue' /* webpackChunkName: "pages/Admin/Shop/Product/Edit/_id" */))
const _d5fd005c = () => interopDefault(import('..\\pages\\Admin\\Edit\\agreement\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/agreement/_id" */))
const _06dfb8e6 = () => interopDefault(import('..\\pages\\Admin\\Edit\\article\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/article/_id" */))
const _1e2ea900 = () => interopDefault(import('..\\pages\\Admin\\Edit\\attribute\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/attribute/_id" */))
const _489dd7f5 = () => interopDefault(import('..\\pages\\Admin\\Edit\\brand\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/brand/_id" */))
const _1aeda88e = () => interopDefault(import('..\\pages\\Admin\\Edit\\cases\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/cases/_id" */))
const _77da5eec = () => interopDefault(import('..\\pages\\Admin\\Edit\\category\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/category/_id" */))
const _1cedc779 = () => interopDefault(import('..\\pages\\Admin\\Edit\\channel\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/channel/_id" */))
const _aac46094 = () => interopDefault(import('..\\pages\\Admin\\Edit\\checklist\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/checklist/_id" */))
const _2bafec86 = () => interopDefault(import('..\\pages\\Admin\\Edit\\city\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/city/_id" */))
const _1a108d6a = () => interopDefault(import('..\\pages\\Admin\\Edit\\collection\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/collection/_id" */))
const _24d65a1b = () => interopDefault(import('..\\pages\\Admin\\Edit\\contracts\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/contracts/_id" */))
const _5cc32246 = () => interopDefault(import('..\\pages\\Admin\\Edit\\country\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/country/_id" */))
const _f289703c = () => interopDefault(import('..\\pages\\Admin\\Edit\\coupon\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/coupon/_id" */))
const _ec333a52 = () => interopDefault(import('..\\pages\\Admin\\Edit\\currency\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/currency/_id" */))
const _42e9fd5b = () => interopDefault(import('..\\pages\\Admin\\Edit\\customergroup\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/customergroup/_id" */))
const _53e7ec07 = () => interopDefault(import('..\\pages\\Admin\\Edit\\deep-dive\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/deep-dive/_id" */))
const _5f4d222b = () => interopDefault(import('..\\pages\\Admin\\Edit\\email_template\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/email_template/_id" */))
const _0ba0f642 = () => interopDefault(import('..\\pages\\Admin\\Edit\\event\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/event/_id" */))
const _7112bdd8 = () => interopDefault(import('..\\pages\\Admin\\Edit\\fullfillment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/fullfillment/_id" */))
const _72c06e8e = () => interopDefault(import('..\\pages\\Admin\\Edit\\gift-certificate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/gift-certificate/_id" */))
const _1344076a = () => interopDefault(import('..\\pages\\Admin\\Edit\\glossary\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/glossary/_id" */))
const _0e235ee2 = () => interopDefault(import('..\\pages\\Admin\\Edit\\invoice\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/invoice/_id" */))
const _d06ecba6 = () => interopDefault(import('..\\pages\\Admin\\Edit\\knowledgebase\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/knowledgebase/_id" */))
const _7dff08e5 = () => interopDefault(import('..\\pages\\Admin\\Edit\\leads\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/leads/_id" */))
const _4dba5941 = () => interopDefault(import('..\\pages\\Admin\\Edit\\meeting\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/meeting/_id" */))
const _728de5af = () => interopDefault(import('..\\pages\\Admin\\Edit\\newsletter\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newsletter/_id" */))
const _3126c3f2 = () => interopDefault(import('..\\pages\\Admin\\Edit\\newslettersubscriber\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newslettersubscriber/_id" */))
const _5e808ba6 = () => interopDefault(import('..\\pages\\Admin\\Edit\\occassion\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/occassion/_id" */))
const _88d06666 = () => interopDefault(import('..\\pages\\Admin\\Edit\\ooto\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/ooto/_id" */))
const _67a74bea = () => interopDefault(import('..\\pages\\Admin\\Edit\\opportunities\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/opportunities/_id" */))
const _23e84919 = () => interopDefault(import('..\\pages\\Admin\\Edit\\page\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/page/_id" */))
const _6cdb5554 = () => interopDefault(import('..\\pages\\Admin\\Edit\\partner\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/partner/_id" */))
const _b7fef8fe = () => interopDefault(import('..\\pages\\Admin\\Edit\\pdf_template\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/pdf_template/_id" */))
const _3a58fd59 = () => interopDefault(import('..\\pages\\Admin\\Edit\\permission\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/permission/_id" */))
const _1f584670 = () => interopDefault(import('..\\pages\\Admin\\Edit\\product-type\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/product-type/_id" */))
const _696ebde6 = () => interopDefault(import('..\\pages\\Admin\\Edit\\product\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/product/_id" */))
const _93b4bee4 = () => interopDefault(import('..\\pages\\Admin\\Edit\\projects\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/projects/_id" */))
const _382279b1 = () => interopDefault(import('..\\pages\\Admin\\Edit\\quotes\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/quotes/_id" */))
const _7fdacad8 = () => interopDefault(import('..\\pages\\Admin\\Edit\\report\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/report/_id" */))
const _22e023d0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\return\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/return/_id" */))
const _763a20f0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\review\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/review/_id" */))
const _d54caa0e = () => interopDefault(import('..\\pages\\Admin\\Edit\\reward\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/reward/_id" */))
const _551cdf12 = () => interopDefault(import('..\\pages\\Admin\\Edit\\role\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/role/_id" */))
const _1e401b49 = () => interopDefault(import('..\\pages\\Admin\\Edit\\segment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/segment/_id" */))
const _02e78b6e = () => interopDefault(import('..\\pages\\Admin\\Edit\\shipment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/shipment/_id" */))
const _45efe802 = () => interopDefault(import('..\\pages\\Admin\\Edit\\shops\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/shops/_id" */))
const _d1f82baa = () => interopDefault(import('..\\pages\\Admin\\Edit\\state\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/state/_id" */))
const _3e15b3c2 = () => interopDefault(import('..\\pages\\Admin\\Edit\\tag\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/tag/_id" */))
const _07a3d252 = () => interopDefault(import('..\\pages\\Admin\\Edit\\target\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/target/_id" */))
const _6f9fbfce = () => interopDefault(import('..\\pages\\Admin\\Edit\\tasks\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/tasks/_id" */))
const _4ef5ce71 = () => interopDefault(import('..\\pages\\Admin\\Edit\\taxrate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrate/_id" */))
const _41b123d5 = () => interopDefault(import('..\\pages\\Admin\\Edit\\taxrule\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrule/_id" */))
const _303597bc = () => interopDefault(import('..\\pages\\Admin\\Edit\\ticket\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/ticket/_id" */))
const _71f392b1 = () => interopDefault(import('..\\pages\\Admin\\Edit\\visit\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/visit/_id" */))
const _2b735739 = () => interopDefault(import('..\\pages\\Admin\\Edit\\warehouse\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/warehouse/_id" */))
const _1a030ec8 = () => interopDefault(import('..\\pages\\Admin\\Edit\\zone\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/zone/_id" */))
const _2f457988 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\Email\\_id.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/_id" */))
=======
const _f59c08d0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _66675e5c = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _098c5e96 = () => interopDefault(import('..\\pages\\Auth\\Forgot.vue' /* webpackChunkName: "pages/Auth/Forgot" */))
const _6015c9c7 = () => interopDefault(import('..\\pages\\Auth\\Login.vue' /* webpackChunkName: "pages/Auth/Login" */))
const _45d525b5 = () => interopDefault(import('..\\pages\\Auth\\Register.vue' /* webpackChunkName: "pages/Auth/Register" */))
const _3f3094ad = () => interopDefault(import('..\\pages\\Auth\\Reset.vue' /* webpackChunkName: "pages/Auth/Reset" */))
const _511aaf21 = () => interopDefault(import('..\\pages\\User\\my-account.vue' /* webpackChunkName: "pages/User/my-account" */))
const _0e6f9a3a = () => interopDefault(import('..\\pages\\User\\notifications.vue' /* webpackChunkName: "pages/User/notifications" */))
const _ff618a9c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-agreement.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement" */))
const _e6e2105a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-agreement copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-agreement copy" */))
const _60a6e39e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-article.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-article" */))
const _afea0b78 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-attribute.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-attribute" */))
const _727d35af = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-brand.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-brand" */))
const _4ec082d0 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-campaign.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-campaign" */))
const _487a20b8 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-case.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-case" */))
const _308458f4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-category.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-category" */))
const _4038c52b = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-channel.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-channel" */))
const _4a9ce764 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-checklist.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-checklist" */))
const _1b0aad1a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-city.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-city" */))
const _39340db4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-collection.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-collection" */))
const _7abffd9a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-contract.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-contract" */))
const _5041c384 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-country.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-country" */))
const _9b97d2a4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-coupon.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-coupon" */))
const _0a414519 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-currency.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-currency" */))
const _04002666 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-customer.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customer" */))
const _4a170e89 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-customergroup.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-customergroup" */))
const _3b53eb30 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-deepdive.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-deepdive" */))
const _1fcd2344 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-email.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-email" */))
const _661ec225 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-emailtemplates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-emailtemplates" */))
const _04ea2cde = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-eosr.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-eosr" */))
const _b96cc97c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-event.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-event" */))
const _20d82120 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-fullfilment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-fullfilment" */))
const _4b24c461 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-gift-certificates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-gift-certificates" */))
const _86c45eb4 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-glossary.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-glossary" */))
const _06ff3356 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-invoice.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-invoice" */))
const _363a3677 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-knowledgebase.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-knowledgebase" */))
const _b78f6238 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-lead.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-lead" */))
const _098b933a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-meeting.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-meeting" */))
const _8d6c6c7e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newsletter.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newsletter" */))
const _111cb9fc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-newslettersubscriber copy.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-newslettersubscriber copy" */))
const _42251a5e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-occassion.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-occassion" */))
const _0de13c63 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-ooto.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-ooto" */))
const _b0be820a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-opportunity.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-opportunity" */))
const _7a6f4097 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-page.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-page" */))
const _69faba70 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-partner.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-partner" */))
const _0be8348f = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-pdftemplates.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-pdftemplates" */))
const _7b250fd7 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-permission.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-permission" */))
const _520d81d2 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-product.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-product" */))
const _295949d1 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-producttype.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-producttype" */))
const _1046cf7e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-project.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-project" */))
const _4905a624 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-quote.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-quote" */))
const _00fc5cbc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-report.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-report" */))
const _44dc3290 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-return.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-return" */))
const _1cd94ce0 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-review.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-review" */))
const _667be6cc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-rewards.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-rewards" */))
const _375112fe = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-role.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-role" */))
const _139b349f = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-schedule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-schedule" */))
const _11d5614a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-segment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-segment" */))
const _a7de4bbc = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-shipment.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shipment" */))
const _32a02d7e = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-shop.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-shop" */))
const _5b361341 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-staffmembers.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-staffmembers" */))
const _251619b9 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-state.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-state" */))
const _65b22be2 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-survey.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-survey" */))
const _7220277c = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-tag.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-tag" */))
const _aa41face = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-target.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-target" */))
const _2ec2a88d = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-task.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-task" */))
const _5ed3799a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrate.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrate" */))
const _3627c162 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-taxrule.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-taxrule" */))
const _0a69c694 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-ticket.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-ticket" */))
const _1174b573 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-visit.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-visit" */))
const _97dfc22a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-warehouse.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-warehouse" */))
const _9cc8c67a = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-website.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-website" */))
const _630797bd = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-workspace.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-workspace" */))
const _79c42b34 = () => interopDefault(import('..\\pages\\Admin\\Add-New\\add-new-zone.vue' /* webpackChunkName: "pages/Admin/Add-New/add-new-zone" */))
const _a6af2054 = () => interopDefault(import('..\\pages\\Admin\\Content\\blog.vue' /* webpackChunkName: "pages/Admin/Content/blog" */))
const _01a3835c = () => interopDefault(import('..\\pages\\Admin\\Content\\glossary.vue' /* webpackChunkName: "pages/Admin/Content/glossary" */))
const _389f7040 = () => interopDefault(import('..\\pages\\Admin\\Content\\media-manager.vue' /* webpackChunkName: "pages/Admin/Content/media-manager" */))
const _32f27580 = () => interopDefault(import('..\\pages\\Admin\\Content\\pages.vue' /* webpackChunkName: "pages/Admin/Content/pages" */))
const _49f27eae = () => interopDefault(import('..\\pages\\Admin\\Content\\projects.vue' /* webpackChunkName: "pages/Admin/Content/projects" */))
const _b0c93e66 = () => interopDefault(import('..\\pages\\Admin\\Content\\tags.vue' /* webpackChunkName: "pages/Admin/Content/tags" */))
const _6fd7eb28 = () => interopDefault(import('..\\pages\\Admin\\Content\\websites.vue' /* webpackChunkName: "pages/Admin/Content/websites" */))
const _3c7a989c = () => interopDefault(import('..\\pages\\Admin\\Content\\workspaces.vue' /* webpackChunkName: "pages/Admin/Content/workspaces" */))
const _75fda189 = () => interopDefault(import('..\\pages\\Admin\\Customers\\all-customers.vue' /* webpackChunkName: "pages/Admin/Customers/all-customers" */))
const _d6f16812 = () => interopDefault(import('..\\pages\\Admin\\Customers\\leads.vue' /* webpackChunkName: "pages/Admin/Customers/leads" */))
const _ca932230 = () => interopDefault(import('..\\pages\\Admin\\Customers\\meetings.vue' /* webpackChunkName: "pages/Admin/Customers/meetings" */))
const _f697adaa = () => interopDefault(import('..\\pages\\Admin\\Customers\\online-customers.vue' /* webpackChunkName: "pages/Admin/Customers/online-customers" */))
const _f5a22dde = () => interopDefault(import('..\\pages\\Admin\\Customers\\opportunities.vue' /* webpackChunkName: "pages/Admin/Customers/opportunities" */))
const _1a3e74f0 = () => interopDefault(import('..\\pages\\Admin\\Customers\\segments.vue' /* webpackChunkName: "pages/Admin/Customers/segments" */))
const _24ea8914 = () => interopDefault(import('..\\pages\\Admin\\Customers\\social-groups.vue' /* webpackChunkName: "pages/Admin/Customers/social-groups" */))
const _f30bc506 = () => interopDefault(import('..\\pages\\Admin\\Customers\\to-do.vue' /* webpackChunkName: "pages/Admin/Customers/to-do" */))
const _e78edfa4 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\checklists.vue' /* webpackChunkName: "pages/Admin/Marketing/checklists" */))
const _a90ef904 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\communications.vue' /* webpackChunkName: "pages/Admin/Marketing/communications" */))
const _0bc563e0 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\contracts.vue' /* webpackChunkName: "pages/Admin/Marketing/contracts" */))
const _4185143a = () => interopDefault(import('..\\pages\\Admin\\Marketing\\events.vue' /* webpackChunkName: "pages/Admin/Marketing/events" */))
const _65b9aa29 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\invitations.vue' /* webpackChunkName: "pages/Admin/Marketing/invitations" */))
const _7352894c = () => interopDefault(import('..\\pages\\Admin\\Marketing\\newsletter.vue' /* webpackChunkName: "pages/Admin/Marketing/newsletter" */))
const _08010d4a = () => interopDefault(import('..\\pages\\Admin\\Marketing\\reviews.vue' /* webpackChunkName: "pages/Admin/Marketing/reviews" */))
const _26fdf85a = () => interopDefault(import('..\\pages\\Admin\\Marketing\\rewards.vue' /* webpackChunkName: "pages/Admin/Marketing/rewards" */))
const _bffeefe8 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\seo.vue' /* webpackChunkName: "pages/Admin/Marketing/seo" */))
const _06fa1b45 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\ticketing.vue' /* webpackChunkName: "pages/Admin/Marketing/ticketing" */))
const _49e8553b = () => interopDefault(import('..\\pages\\Admin\\Marketing\\training.vue' /* webpackChunkName: "pages/Admin/Marketing/training" */))
const _ce857fae = () => interopDefault(import('..\\pages\\Admin\\Marketing\\visits.vue' /* webpackChunkName: "pages/Admin/Marketing/visits" */))
const _9ed7c42a = () => interopDefault(import('..\\pages\\Admin\\Reports\\calendars.vue' /* webpackChunkName: "pages/Admin/Reports/calendars" */))
const _413fe439 = () => interopDefault(import('..\\pages\\Admin\\Reports\\cases.vue' /* webpackChunkName: "pages/Admin/Reports/cases" */))
const _32a4772b = () => interopDefault(import('..\\pages\\Admin\\Reports\\deep-dive.vue' /* webpackChunkName: "pages/Admin/Reports/deep-dive" */))
const _74fccb03 = () => interopDefault(import('..\\pages\\Admin\\Reports\\eosr.vue' /* webpackChunkName: "pages/Admin/Reports/eosr" */))
const _f559c456 = () => interopDefault(import('..\\pages\\Admin\\Reports\\ooto.vue' /* webpackChunkName: "pages/Admin/Reports/ooto" */))
const _0fa52d35 = () => interopDefault(import('..\\pages\\Admin\\Reports\\reports.vue' /* webpackChunkName: "pages/Admin/Reports/reports" */))
const _44d9b51d = () => interopDefault(import('..\\pages\\Admin\\Reports\\statistics.vue' /* webpackChunkName: "pages/Admin/Reports/statistics" */))
const _41a942cf = () => interopDefault(import('..\\pages\\Admin\\Reports\\surveys.vue' /* webpackChunkName: "pages/Admin/Reports/surveys" */))
const _d9f07776 = () => interopDefault(import('..\\pages\\Admin\\Reports\\team-scheduler.vue' /* webpackChunkName: "pages/Admin/Reports/team-scheduler" */))
const _09cd8ab0 = () => interopDefault(import('..\\pages\\Admin\\Sales\\agreements.vue' /* webpackChunkName: "pages/Admin/Sales/agreements" */))
const _312acb83 = () => interopDefault(import('..\\pages\\Admin\\Sales\\certificates.vue' /* webpackChunkName: "pages/Admin/Sales/certificates" */))
const _4d1cafec = () => interopDefault(import('..\\pages\\Admin\\Sales\\credit-memos.vue' /* webpackChunkName: "pages/Admin/Sales/credit-memos" */))
const _48e971a6 = () => interopDefault(import('..\\pages\\Admin\\Sales\\invoices.vue' /* webpackChunkName: "pages/Admin/Sales/invoices" */))
const _3f65cf6c = () => interopDefault(import('..\\pages\\Admin\\Sales\\orders.vue' /* webpackChunkName: "pages/Admin/Sales/orders" */))
const _5ec164fe = () => interopDefault(import('..\\pages\\Admin\\Sales\\quotes.vue' /* webpackChunkName: "pages/Admin/Sales/quotes" */))
const _7c76c868 = () => interopDefault(import('..\\pages\\Admin\\Sales\\returns.vue' /* webpackChunkName: "pages/Admin/Sales/returns" */))
const _1fcb0162 = () => interopDefault(import('..\\pages\\Admin\\Sales\\shipments.vue' /* webpackChunkName: "pages/Admin/Sales/shipments" */))
const _233822c8 = () => interopDefault(import('..\\pages\\Admin\\Sales\\transactions.vue' /* webpackChunkName: "pages/Admin/Sales/transactions" */))
const _7504dbbc = () => interopDefault(import('..\\pages\\Admin\\Shop\\attributes.vue' /* webpackChunkName: "pages/Admin/Shop/attributes" */))
const _407ec4d2 = () => interopDefault(import('..\\pages\\Admin\\Shop\\brands.vue' /* webpackChunkName: "pages/Admin/Shop/brands" */))
const _67414467 = () => interopDefault(import('..\\pages\\Admin\\Shop\\categories.vue' /* webpackChunkName: "pages/Admin/Shop/categories" */))
const _343b825a = () => interopDefault(import('..\\pages\\Admin\\Shop\\collections.vue' /* webpackChunkName: "pages/Admin/Shop/collections" */))
const _767e6c52 = () => interopDefault(import('..\\pages\\Admin\\Shop\\coupons.vue' /* webpackChunkName: "pages/Admin/Shop/coupons" */))
const _1da0fc3e = () => interopDefault(import('..\\pages\\Admin\\Shop\\inventory.vue' /* webpackChunkName: "pages/Admin/Shop/inventory" */))
const _a8224472 = () => interopDefault(import('..\\pages\\Admin\\Shop\\manufacturers.vue' /* webpackChunkName: "pages/Admin/Shop/manufacturers" */))
const _6ea77548 = () => interopDefault(import('..\\pages\\Admin\\Shop\\occassions.vue' /* webpackChunkName: "pages/Admin/Shop/occassions" */))
const _69f4a794 = () => interopDefault(import('..\\pages\\Admin\\Shop\\partners.vue' /* webpackChunkName: "pages/Admin/Shop/partners" */))
const _dd8e86c0 = () => interopDefault(import('..\\pages\\Admin\\Shop\\product-types.vue' /* webpackChunkName: "pages/Admin/Shop/product-types" */))
const _04508722 = () => interopDefault(import('..\\pages\\Admin\\Shop\\products.vue' /* webpackChunkName: "pages/Admin/Shop/products" */))
const _5b18da7c = () => interopDefault(import('..\\pages\\Admin\\Shop\\shops.vue' /* webpackChunkName: "pages/Admin/Shop/shops" */))
const _3a1d025b = () => interopDefault(import('..\\pages\\Admin\\Shop\\warehouses.vue' /* webpackChunkName: "pages/Admin/Shop/warehouses" */))
const _2b8822d3 = () => interopDefault(import('..\\pages\\Admin\\Shop\\wishlists.vue' /* webpackChunkName: "pages/Admin/Shop/wishlists" */))
const _11cb2130 = () => interopDefault(import('..\\pages\\Admin\\System\\export-management.vue' /* webpackChunkName: "pages/Admin/System/export-management" */))
const _7a2e26a8 = () => interopDefault(import('..\\pages\\Admin\\System\\general-settings.vue' /* webpackChunkName: "pages/Admin/System/general-settings" */))
const _358a0f57 = () => interopDefault(import('..\\pages\\Admin\\System\\import-management.vue' /* webpackChunkName: "pages/Admin/System/import-management" */))
const _72c4f8e3 = () => interopDefault(import('..\\pages\\Admin\\System\\integrations.vue' /* webpackChunkName: "pages/Admin/System/integrations" */))
const _02a33f8a = () => interopDefault(import('..\\pages\\Admin\\System\\knowledgebase.vue' /* webpackChunkName: "pages/Admin/System/knowledgebase" */))
const _d44744cc = () => interopDefault(import('..\\pages\\Admin\\System\\role-manager.vue' /* webpackChunkName: "pages/Admin/System/role-manager" */))
const _1ef183e7 = () => interopDefault(import('..\\pages\\Admin\\System\\settings.vue' /* webpackChunkName: "pages/Admin/System/settings" */))
const _4e49ac80 = () => interopDefault(import('..\\pages\\Admin\\Customers\\customer\\newcustomer.vue' /* webpackChunkName: "pages/Admin/Customers/customer/newcustomer" */))
const _20246e2e = () => interopDefault(import('..\\pages\\Admin\\Edit\\providers\\id.vue' /* webpackChunkName: "pages/Admin/Edit/providers/id" */))
const _774a9b67 = () => interopDefault(import('..\\pages\\Admin\\Marketing\\Email\\email-designer.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/email-designer" */))
const _36b5b128 = () => interopDefault(import('..\\pages\\Admin\\Shop\\Product\\Edit\\_id.vue' /* webpackChunkName: "pages/Admin/Shop/Product/Edit/_id" */))
const _0bf0fe4f = () => interopDefault(import('..\\pages\\Admin\\Edit\\agreement\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/agreement/_id" */))
const _d8b29aba = () => interopDefault(import('..\\pages\\Admin\\Edit\\article\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/article/_id" */))
const _67d829fd = () => interopDefault(import('..\\pages\\Admin\\Edit\\attribute\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/attribute/_id" */))
const _153bc61c = () => interopDefault(import('..\\pages\\Admin\\Edit\\brand\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/brand/_id" */))
const _c1651e94 = () => interopDefault(import('..\\pages\\Admin\\Edit\\cases\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/cases/_id" */))
const _5fa9e326 = () => interopDefault(import('..\\pages\\Admin\\Edit\\category\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/category/_id" */))
const _ac967d94 = () => interopDefault(import('..\\pages\\Admin\\Edit\\channel\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/channel/_id" */))
const _218d4e33 = () => interopDefault(import('..\\pages\\Admin\\Edit\\checklist\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/checklist/_id" */))
const _310e9dc0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\city\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/city/_id" */))
const _fdde42e6 = () => interopDefault(import('..\\pages\\Admin\\Edit\\collection\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/collection/_id" */))
const _c8744ed0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\contracts\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/contracts/_id" */))
const _2cebc7fa = () => interopDefault(import('..\\pages\\Admin\\Edit\\country\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/country/_id" */))
const _727fa285 = () => interopDefault(import('..\\pages\\Admin\\Edit\\coupon\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/coupon/_id" */))
const _d402be8c = () => interopDefault(import('..\\pages\\Admin\\Edit\\currency\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/currency/_id" */))
const _be681550 = () => interopDefault(import('..\\pages\\Admin\\Edit\\customergroup\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/customergroup/_id" */))
const _6a512af8 = () => interopDefault(import('..\\pages\\Admin\\Edit\\deep-dive\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/deep-dive/_id" */))
const _84abac64 = () => interopDefault(import('..\\pages\\Admin\\Edit\\email_template\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/email_template/_id" */))
const _8f358982 = () => interopDefault(import('..\\pages\\Admin\\Edit\\event\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/event/_id" */))
const _1943523b = () => interopDefault(import('..\\pages\\Admin\\Edit\\fullfillment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/fullfillment/_id" */))
const _a40bcd1e = () => interopDefault(import('..\\pages\\Admin\\Edit\\gift-certificate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/gift-certificate/_id" */))
const _1f5c454d = () => interopDefault(import('..\\pages\\Admin\\Edit\\glossary\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/glossary/_id" */))
const _f4956b68 = () => interopDefault(import('..\\pages\\Admin\\Edit\\invoice\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/invoice/_id" */))
const _14aadbac = () => interopDefault(import('..\\pages\\Admin\\Edit\\knowledgebase\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/knowledgebase/_id" */))
const _2ac34de2 = () => interopDefault(import('..\\pages\\Admin\\Edit\\leads\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/leads/_id" */))
const _4afd5a04 = () => interopDefault(import('..\\pages\\Admin\\Edit\\meeting\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/meeting/_id" */))
const _4ce3925c = () => interopDefault(import('..\\pages\\Admin\\Edit\\newsletter\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newsletter/_id" */))
const _46401f6a = () => interopDefault(import('..\\pages\\Admin\\Edit\\newslettersubscriber\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/newslettersubscriber/_id" */))
const _551febba = () => interopDefault(import('..\\pages\\Admin\\Edit\\occassion\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/occassion/_id" */))
const _8e2f17a0 = () => interopDefault(import('..\\pages\\Admin\\Edit\\ooto\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/ooto/_id" */))
const _2a0e5208 = () => interopDefault(import('..\\pages\\Admin\\Edit\\opportunities\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/opportunities/_id" */))
const _2138f07c = () => interopDefault(import('..\\pages\\Admin\\Edit\\page\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/page/_id" */))
const _0cbb61de = () => interopDefault(import('..\\pages\\Admin\\Edit\\partner\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/partner/_id" */))
const _4c3117e4 = () => interopDefault(import('..\\pages\\Admin\\Edit\\pdf_template\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/pdf_template/_id" */))
const _bd4d6308 = () => interopDefault(import('..\\pages\\Admin\\Edit\\permission\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/permission/_id" */))
const _70ee4a5a = () => interopDefault(import('..\\pages\\Admin\\Edit\\product-type\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/product-type/_id" */))
const _580f9aca = () => interopDefault(import('..\\pages\\Admin\\Edit\\product\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/product/_id" */))
const _7b84431e = () => interopDefault(import('..\\pages\\Admin\\Edit\\projects\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/projects/_id" */))
const _23e6d454 = () => interopDefault(import('..\\pages\\Admin\\Edit\\quotes\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/quotes/_id" */))
const _a8521592 = () => interopDefault(import('..\\pages\\Admin\\Edit\\report\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/report/_id" */))
const _4b576e8a = () => interopDefault(import('..\\pages\\Admin\\Edit\\return\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/return/_id" */))
const _61fe7b93 = () => interopDefault(import('..\\pages\\Admin\\Edit\\review\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/review/_id" */))
const _fdc3f4c8 = () => interopDefault(import('..\\pages\\Admin\\Edit\\reward\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/reward/_id" */))
const _526d8675 = () => interopDefault(import('..\\pages\\Admin\\Edit\\role\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/role/_id" */))
const _a9f1d5f4 = () => interopDefault(import('..\\pages\\Admin\\Edit\\segment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/segment/_id" */))
const _0effc951 = () => interopDefault(import('..\\pages\\Admin\\Edit\\shipment\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/shipment/_id" */))
const _ec675e08 = () => interopDefault(import('..\\pages\\Admin\\Edit\\shops\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/shops/_id" */))
const _43c82f28 = () => interopDefault(import('..\\pages\\Admin\\Edit\\state\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/state/_id" */))
const _043113ff = () => interopDefault(import('..\\pages\\Admin\\Edit\\tag\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/tag/_id" */))
const _301b1d0c = () => interopDefault(import('..\\pages\\Admin\\Edit\\target\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/target/_id" */))
const _1c6404cb = () => interopDefault(import('..\\pages\\Admin\\Edit\\tasks\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/tasks/_id" */))
const _48866fa4 = () => interopDefault(import('..\\pages\\Admin\\Edit\\taxrate\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrate/_id" */))
const _630fc4dc = () => interopDefault(import('..\\pages\\Admin\\Edit\\taxrule\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/taxrule/_id" */))
const _1bf9f25f = () => interopDefault(import('..\\pages\\Admin\\Edit\\ticket\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/ticket/_id" */))
const _1eb7d7ae = () => interopDefault(import('..\\pages\\Admin\\Edit\\visit\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/visit/_id" */))
const _bb3a5494 = () => interopDefault(import('..\\pages\\Admin\\Edit\\warehouse\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/warehouse/_id" */))
const _1f61c002 = () => interopDefault(import('..\\pages\\Admin\\Edit\\zone\\_id.vue' /* webpackChunkName: "pages/Admin/Edit/zone/_id" */))
const _4f5d945f = () => interopDefault(import('..\\pages\\Admin\\Marketing\\Email\\_id.vue' /* webpackChunkName: "pages/Admin/Marketing/Email/_id" */))
>>>>>>> a98e424a92b60fb3e673ff0cfc45b84cd321f0e8

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/es",
    component: _bd46fd4a,
    name: "index___es"
  }, {
    path: "/fr",
    component: _bd46fd4a,
    name: "index___fr"
  }, {
    path: "/search",
    component: _35f2836f,
    name: "search___en"
  }, {
    path: "/Auth/Forgot",
    component: _4eb64cdc,
    name: "Auth-Forgot___en"
  }, {
    path: "/Auth/Login",
    component: _1ce7b14a,
    name: "Auth-Login___en"
  }, {
    path: "/Auth/Register",
    component: _74a16b52,
    name: "Auth-Register___en"
  }, {
    path: "/Auth/Reset",
    component: _07fb07a0,
    name: "Auth-Reset___en"
  }, {
    path: "/es/search",
    component: _35f2836f,
    name: "search___es"
  }, {
    path: "/fr/search",
    component: _35f2836f,
    name: "search___fr"
  }, {
    path: "/User/my-account",
    component: _0427fd04,
    name: "User-my-account___en"
  }, {
    path: "/User/notifications",
    component: _18703134,
    name: "User-notifications___en"
  }, {
    path: "/Admin/Add-New/add-new-agreement",
    component: _130b4df5,
    name: "Admin-Add-New-add-new-agreement___en"
  }, {
    path: "/Admin/Add-New/add-new-agreement%20copy",
    component: _2dbb7670,
    name: "Admin-Add-New-add-new-agreement copy___en"
  }, {
    path: "/Admin/Add-New/add-new-article",
    component: _02c4eba1,
    name: "Admin-Add-New-add-new-article___en"
  }, {
    path: "/Admin/Add-New/add-new-attribute",
    component: _3ac70d87,
    name: "Admin-Add-New-add-new-attribute___en"
  }, {
    path: "/Admin/Add-New/add-new-brand",
    component: _0d193b1c,
    name: "Admin-Add-New-add-new-brand___en"
  }, {
    path: "/Admin/Add-New/add-new-campaign",
    component: _7a42b6f5,
    name: "Admin-Add-New-add-new-campaign___en"
  }, {
    path: "/Admin/Add-New/add-new-case",
    component: _3d0c60d6,
    name: "Admin-Add-New-add-new-case___en"
  }, {
    path: "/Admin/Add-New/add-new-category",
    component: _ed3e683a,
    name: "Admin-Add-New-add-new-category___en"
  }, {
    path: "/Admin/Add-New/add-new-channel",
    component: _3b5265a4,
    name: "Admin-Add-New-add-new-channel___en"
  }, {
    path: "/Admin/Add-New/add-new-checklist",
    component: _6d6d9f91,
    name: "Admin-Add-New-add-new-checklist___en"
  }, {
    path: "/Admin/Add-New/add-new-city",
    component: _e90b4f60,
    name: "Admin-Add-New-add-new-city___en"
  }, {
    path: "/Admin/Add-New/add-new-collection",
    component: _afa7637a,
    name: "Admin-Add-New-add-new-collection___en"
  }, {
    path: "/Admin/Add-New/add-new-contract",
    component: _1c62f5f7,
    name: "Admin-Add-New-add-new-contract___en"
  }, {
    path: "/Admin/Add-New/add-new-country",
    component: _79fd2641,
    name: "Admin-Add-New-add-new-country___en"
  }, {
    path: "/Admin/Add-New/add-new-coupon",
    component: _0a03824b,
    name: "Admin-Add-New-add-new-coupon___en"
  }, {
    path: "/Admin/Add-New/add-new-currency",
    component: _a8378514,
    name: "Admin-Add-New-add-new-currency___en"
  }, {
    path: "/Admin/Add-New/add-new-customer",
    component: _b4b9c27a,
    name: "Admin-Add-New-add-new-customer___en"
  }, {
    path: "/Admin/Add-New/add-new-customergroup",
    component: _2e41c84c,
    name: "Admin-Add-New-add-new-customergroup___en"
  }, {
    path: "/Admin/Add-New/add-new-deepdive",
    component: _f80dfa76,
    name: "Admin-Add-New-add-new-deepdive___en"
  }, {
    path: "/Admin/Add-New/add-new-email",
    component: _b2795ff2,
    name: "Admin-Add-New-add-new-email___en"
  }, {
    path: "/Admin/Add-New/add-new-emailtemplates",
    component: _074b40c2,
    name: "Admin-Add-New-add-new-emailtemplates___en"
  }, {
    path: "/Admin/Add-New/add-new-eosr",
    component: _d2eacf24,
    name: "Admin-Add-New-add-new-eosr___en"
  }, {
    path: "/Admin/Add-New/add-new-event",
    component: _2a3fc805,
    name: "Admin-Add-New-add-new-event___en"
  }, {
    path: "/Admin/Add-New/add-new-fullfilment",
    component: _164720ba,
    name: "Admin-Add-New-add-new-fullfilment___en"
  }, {
    path: "/Admin/Add-New/add-new-gift-certificates",
    component: _4406e4a4,
    name: "Admin-Add-New-add-new-gift-certificates___en"
  }, {
    path: "/Admin/Add-New/add-new-glossary",
    component: _5e40c903,
    name: "Admin-Add-New-add-new-glossary___en"
  }, {
    path: "/Admin/Add-New/add-new-invoice",
    component: _c2c32350,
    name: "Admin-Add-New-add-new-invoice___en"
  }, {
    path: "/Admin/Add-New/add-new-knowledgebase",
    component: _1a64f03a,
    name: "Admin-Add-New-add-new-knowledgebase___en"
  }, {
    path: "/Admin/Add-New/add-new-lead",
    component: _3d37fdc1,
    name: "Admin-Add-New-add-new-lead___en"
  }, {
    path: "/Admin/Add-New/add-new-meeting",
    component: _c54f8334,
    name: "Admin-Add-New-add-new-meeting___en"
  }, {
    path: "/Admin/Add-New/add-new-newsletter",
    component: _7e101ede,
    name: "Admin-Add-New-add-new-newsletter___en"
  }, {
    path: "/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _63c7e73f,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___en"
  }, {
    path: "/Admin/Add-New/add-new-occassion",
    component: _563da4be,
    name: "Admin-Add-New-add-new-occassion___en"
  }, {
    path: "/Admin/Add-New/add-new-ooto",
    component: _b23e2980,
    name: "Admin-Add-New-add-new-ooto___en"
  }, {
    path: "/Admin/Add-New/add-new-opportunity",
    component: _7ba50d7e,
    name: "Admin-Add-New-add-new-opportunity___en"
  }, {
    path: "/Admin/Add-New/add-new-page",
    component: _136eef74,
    name: "Admin-Add-New-add-new-page___en"
  }, {
    path: "/Admin/Add-New/add-new-partner",
    component: _0c18c273,
    name: "Admin-Add-New-add-new-partner___en"
  }, {
    path: "/Admin/Add-New/add-new-pdftemplates",
    component: _8f249328,
    name: "Admin-Add-New-add-new-pdftemplates___en"
  }, {
    path: "/Admin/Add-New/add-new-permission",
    component: _3feb64f4,
    name: "Admin-Add-New-add-new-permission___en"
  }, {
    path: "/Admin/Add-New/add-new-product",
    component: _7917471a,
    name: "Admin-Add-New-add-new-product___en"
  }, {
    path: "/Admin/Add-New/add-new-producttype",
    component: _0544cf58,
    name: "Admin-Add-New-add-new-producttype___en"
  }, {
    path: "/Admin/Add-New/add-new-project",
    component: _cc0abf78,
    name: "Admin-Add-New-add-new-project___en"
  }, {
    path: "/Admin/Add-New/add-new-quote",
    component: _60085a32,
    name: "Admin-Add-New-add-new-quote___en"
  }, {
    path: "/Admin/Add-New/add-new-report",
    component: _58cbc859,
    name: "Admin-Add-New-add-new-report___en"
  }, {
    path: "/Admin/Add-New/add-new-return",
    component: _35615255,
    name: "Admin-Add-New-add-new-return___en"
  }, {
    path: "/Admin/Add-New/add-new-review",
    component: _74a8b87d,
    name: "Admin-Add-New-add-new-review___en"
  }, {
    path: "/Admin/Add-New/add-new-rewards",
    component: _0899eecf,
    name: "Admin-Add-New-add-new-rewards___en"
  }, {
    path: "/Admin/Add-New/add-new-role",
    component: _5f5e7c4a,
    name: "Admin-Add-New-add-new-role___en"
  }, {
    path: "/Admin/Add-New/add-new-schedule",
    component: _9583a608,
    name: "Admin-Add-New-add-new-schedule___en"
  }, {
    path: "/Admin/Add-New/add-new-segment",
    component: _cd995144,
    name: "Admin-Add-New-add-new-segment___en"
  }, {
    path: "/Admin/Add-New/add-new-shipment",
    component: _4db3d27f,
    name: "Admin-Add-New-add-new-shipment___en"
  }, {
    path: "/Admin/Add-New/add-new-shop",
    component: _68c0474a,
    name: "Admin-Add-New-add-new-shop___en"
  }, {
    path: "/Admin/Add-New/add-new-staffmembers",
    component: _07bb951e,
    name: "Admin-Add-New-add-new-staffmembers___en"
  }, {
    path: "/Admin/Add-New/add-new-state",
    component: _a7e77308,
    name: "Admin-Add-New-add-new-state___en"
  }, {
    path: "/Admin/Add-New/add-new-survey",
    component: _84fcd102,
    name: "Admin-Add-New-add-new-survey___en"
  }, {
    path: "/Admin/Add-New/add-new-tag",
    component: _50006dc5,
    name: "Admin-Add-New-add-new-tag___en"
  }, {
    path: "/Admin/Add-New/add-new-target",
    component: _02ae6e36,
    name: "Admin-Add-New-add-new-target___en"
  }, {
    path: "/Admin/Add-New/add-new-task",
    component: _707b512c,
    name: "Admin-Add-New-add-new-task___en"
  }, {
    path: "/Admin/Add-New/add-new-taxrate",
    component: _72b44b36,
    name: "Admin-Add-New-add-new-taxrate___en"
  }, {
    path: "/Admin/Add-New/add-new-taxrule",
    component: _f1ebb15c,
    name: "Admin-Add-New-add-new-taxrule___en"
  }, {
    path: "/Admin/Add-New/add-new-ticket",
    component: _62393231,
    name: "Admin-Add-New-add-new-ticket___en"
  }, {
    path: "/Admin/Add-New/add-new-visit",
    component: _cf2a3b94,
    name: "Admin-Add-New-add-new-visit___en"
  }, {
    path: "/Admin/Add-New/add-new-warehouse",
    component: _46cc322e,
    name: "Admin-Add-New-add-new-warehouse___en"
  }, {
    path: "/Admin/Add-New/add-new-website",
    component: _9cc8c67a,
    name: "Admin-Add-New-add-new-website___en"
  }, {
    path: "/Admin/Add-New/add-new-workspace",
    component: _1478aa00,
    name: "Admin-Add-New-add-new-workspace___en"
  }, {
    path: "/Admin/Add-New/add-new-zone",
    component: _12c3da11,
    name: "Admin-Add-New-add-new-zone___en"
  }, {
    path: "/Admin/Content/blog",
    component: _119f4bb3,
    name: "Admin-Content-blog___en"
  }, {
    path: "/Admin/Content/glossary",
    component: _1369e3af,
    name: "Admin-Content-glossary___en"
  }, {
    path: "/Admin/Content/media-manager",
    component: _80d4c5fa,
    name: "Admin-Content-media-manager___en"
  }, {
    path: "/Admin/Content/pages",
    component: _206b6503,
    name: "Admin-Content-pages___en"
  }, {
    path: "/Admin/Content/projects",
    component: _5e2e240b,
    name: "Admin-Content-projects___en"
  }, {
    path: "/Admin/Content/tags",
    component: _0c923caa,
    name: "Admin-Content-tags___en"
  }, {
    path: "/Admin/Content/websites",
    component: _6fd7eb28,
    name: "Admin-Content-websites___en"
  }, {
    path: "/Admin/Content/workspaces",
    component: _54ab1462,
    name: "Admin-Content-workspaces___en"
  }, {
    path: "/Admin/Customers/all-customers",
    component: _181ba98c,
    name: "Admin-Customers-all-customers___en"
  }, {
    path: "/Admin/Customers/leads",
    component: _3079f20c,
    name: "Admin-Customers-leads___en"
  }, {
    path: "/Admin/Customers/meetings",
    component: _e2c39df6,
    name: "Admin-Customers-meetings___en"
  }, {
    path: "/Admin/Customers/online-customers",
    component: _497a7e48,
    name: "Admin-Customers-online-customers___en"
  }, {
    path: "/Admin/Customers/opportunities",
    component: _274cf114,
    name: "Admin-Customers-opportunities___en"
  }, {
    path: "/Admin/Customers/segments",
    component: _0e26370d,
    name: "Admin-Customers-segments___en"
  }, {
    path: "/Admin/Customers/social-groups",
    component: _71eeddd2,
    name: "Admin-Customers-social-groups___en"
  }, {
    path: "/Admin/Customers/to-do",
    component: _4c944f00,
    name: "Admin-Customers-to-do___en"
  }, {
    path: "/Admin/Marketing/checklists",
    component: _25383f0b,
    name: "Admin-Marketing-checklists___en"
  }, {
    path: "/Admin/Marketing/communications",
    component: _4d1b7bdb,
    name: "Admin-Marketing-communications___en"
  }, {
    path: "/Admin/Marketing/contracts",
    component: _f9a460da,
    name: "Admin-Marketing-contracts___en"
  }, {
    path: "/Admin/Marketing/events",
    component: _55c0b997,
    name: "Admin-Marketing-events___en"
  }, {
    path: "/Admin/Marketing/invitations",
    component: _26a05228,
    name: "Admin-Marketing-invitations___en"
  }, {
    path: "/Admin/Marketing/newsletter",
    component: _5f566a37,
    name: "Admin-Marketing-newsletter___en"
  }, {
    path: "/Admin/Marketing/reviews",
    component: _7b3a138d,
    name: "Admin-Marketing-reviews___en"
  }, {
    path: "/Admin/Marketing/rewards",
    component: _5fba0a16,
    name: "Admin-Marketing-rewards___en"
  }, {
    path: "/Admin/Marketing/seo",
    component: _4c35b062,
    name: "Admin-Marketing-seo___en"
  }, {
    path: "/Admin/Marketing/ticketing",
    component: _dfeac670,
    name: "Admin-Marketing-ticketing___en"
  }, {
    path: "/Admin/Marketing/training",
    component: _3dd01758,
    name: "Admin-Marketing-training___en"
  }, {
    path: "/Admin/Marketing/visits",
    component: _a60e34f4,
    name: "Admin-Marketing-visits___en"
  }, {
    path: "/Admin/Reports/calendars",
    component: _23cd242e,
    name: "Admin-Reports-calendars___en"
  }, {
    path: "/Admin/Reports/cases",
    component: _7b2483fc,
    name: "Admin-Reports-cases___en"
  }, {
    path: "/Admin/Reports/deep-dive",
    component: _b4450524,
    name: "Admin-Reports-deep-dive___en"
  }, {
    path: "/Admin/Reports/eosr",
    component: _4c18b240,
    name: "Admin-Reports-eosr___en"
  }, {
    path: "/Admin/Reports/ooto",
    component: _2b6c0c9c,
    name: "Admin-Reports-ooto___en"
  }, {
    path: "/Admin/Reports/reports",
    component: _62e0e838,
    name: "Admin-Reports-reports___en"
  }, {
    path: "/Admin/Reports/statistics",
    component: _38c1773a,
    name: "Admin-Reports-statistics___en"
  }, {
    path: "/Admin/Reports/surveys",
    component: _d636045c,
    name: "Admin-Reports-surveys___en"
  }, {
    path: "/Admin/Reports/team-scheduler",
    component: _2a51a03c,
    name: "Admin-Reports-team-scheduler___en"
  }, {
    path: "/Admin/Sales/agreements",
    component: _1e09300d,
    name: "Admin-Sales-agreements___en"
  }, {
    path: "/Admin/Sales/certificates",
    component: _25128da0,
    name: "Admin-Sales-certificates___en"
  }, {
    path: "/Admin/Sales/credit-memos",
    component: _41047209,
    name: "Admin-Sales-credit-memos___en"
  }, {
    path: "/Admin/Sales/invoices",
    component: _438ac06c,
    name: "Admin-Sales-invoices___en"
  }, {
    path: "/Admin/Sales/orders",
    component: _b746a96e,
    name: "Admin-Sales-orders___en"
  }, {
    path: "/Admin/Sales/quotes",
    component: _788f7e4a,
    name: "Admin-Sales-quotes___en"
  }, {
    path: "/Admin/Sales/returns",
    component: _08ad88e2,
    name: "Admin-Sales-returns___en"
  }, {
    path: "/Admin/Sales/shipments",
    component: _7306bc65,
    name: "Admin-Sales-shipments___en"
  }, {
    path: "/Admin/Sales/transactions",
    component: _3b689e8e,
    name: "Admin-Sales-transactions___en"
  }, {
    path: "/Admin/Shop/attributes",
    component: _18b94d25,
    name: "Admin-Shop-attributes___en"
  }, {
    path: "/Admin/Shop/brands",
    component: _4a7f5bcc,
    name: "Admin-Shop-brands___en"
  }, {
    path: "/Admin/Shop/categories",
    component: _8b06012c,
    name: "Admin-Shop-categories___en"
  }, {
    path: "/Admin/Shop/collections",
    component: _487727b7,
    name: "Admin-Shop-collections___en"
  }, {
    path: "/Admin/Shop/coupons",
    component: _49156fa2,
    name: "Admin-Shop-coupons___en"
  }, {
    path: "/Admin/Shop/inventory",
    component: _18424b04,
    name: "Admin-Shop-inventory___en"
  }, {
    path: "/Admin/Shop/manufacturers",
    component: _c052c038,
    name: "Admin-Shop-manufacturers___en"
  }, {
    path: "/Admin/Shop/occassions",
    component: _7c399f6a,
    name: "Admin-Shop-occassions___en"
  }, {
    path: "/Admin/Shop/partners",
    component: _04ea4bf9,
    name: "Admin-Shop-partners___en"
  }, {
    path: "/Admin/Shop/product-types",
    component: _f5bf0286,
    name: "Admin-Shop-product-types___en"
  }, {
    path: "/Admin/Shop/products",
    component: _37bc5c32,
    name: "Admin-Shop-products___en"
  }, {
    path: "/Admin/Shop/shops",
    component: _df8c7c42,
    name: "Admin-Shop-shops___en"
  }, {
    path: "/Admin/Shop/warehouses",
    component: _e54e8544,
    name: "Admin-Shop-warehouses___en"
  }, {
    path: "/Admin/Shop/wishlists",
    component: _2e377b70,
    name: "Admin-Shop-wishlists___en"
  }, {
    path: "/Admin/System/export-management",
    component: _ce853076,
    name: "Admin-System-export-management___en"
  }, {
    path: "/Admin/System/general-settings",
    component: _6506f4af,
    name: "Admin-System-general-settings___en"
  }, {
    path: "/Admin/System/import-management",
    component: _51a5f098,
    name: "Admin-System-import-management___en"
  }, {
    path: "/Admin/System/integrations",
    component: _08550b34,
    name: "Admin-System-integrations___en"
  }, {
    path: "/Admin/System/knowledgebase",
    component: _d0a3e1d0,
    name: "Admin-System-knowledgebase___en"
  }, {
    path: "/Admin/System/role-manager",
    component: _1eecdf1d,
    name: "Admin-System-role-manager___en"
  }, {
    path: "/Admin/System/settings",
    component: _722d3eea,
    name: "Admin-System-settings___en"
  }, {
    path: "/es/Auth/Forgot",
    component: _4eb64cdc,
    name: "Auth-Forgot___es"
  }, {
    path: "/es/Auth/Login",
    component: _1ce7b14a,
    name: "Auth-Login___es"
  }, {
    path: "/es/Auth/Register",
    component: _74a16b52,
    name: "Auth-Register___es"
  }, {
    path: "/es/Auth/Reset",
    component: _07fb07a0,
    name: "Auth-Reset___es"
  }, {
    path: "/es/User/my-account",
    component: _0427fd04,
    name: "User-my-account___es"
  }, {
    path: "/es/User/notifications",
    component: _18703134,
    name: "User-notifications___es"
  }, {
    path: "/fr/Auth/Forgot",
    component: _4eb64cdc,
    name: "Auth-Forgot___fr"
  }, {
    path: "/fr/Auth/Login",
    component: _1ce7b14a,
    name: "Auth-Login___fr"
  }, {
    path: "/fr/Auth/Register",
    component: _74a16b52,
    name: "Auth-Register___fr"
  }, {
    path: "/fr/Auth/Reset",
    component: _07fb07a0,
    name: "Auth-Reset___fr"
  }, {
    path: "/fr/User/my-account",
    component: _0427fd04,
    name: "User-my-account___fr"
  }, {
    path: "/fr/User/notifications",
    component: _18703134,
    name: "User-notifications___fr"
  }, {
    path: "/Admin/Customers/customer/newcustomer",
    component: _5d3e7ec3,
    name: "Admin-Customers-customer-newcustomer___en"
  }, {
    path: "/Admin/Edit/providers/id",
    component: _140c304b,
    name: "Admin-Edit-providers-id___en"
  }, {
    path: "/Admin/Marketing/Email/email-designer",
    component: _08a41f2c,
    name: "Admin-Marketing-Email-email-designer___en"
  }, {
    path: "/es/Admin/Add-New/add-new-agreement",
    component: _130b4df5,
    name: "Admin-Add-New-add-new-agreement___es"
  }, {
    path: "/es/Admin/Add-New/add-new-agreement%20copy",
    component: _2dbb7670,
    name: "Admin-Add-New-add-new-agreement copy___es"
  }, {
    path: "/es/Admin/Add-New/add-new-article",
    component: _02c4eba1,
    name: "Admin-Add-New-add-new-article___es"
  }, {
    path: "/es/Admin/Add-New/add-new-attribute",
    component: _3ac70d87,
    name: "Admin-Add-New-add-new-attribute___es"
  }, {
    path: "/es/Admin/Add-New/add-new-brand",
    component: _0d193b1c,
    name: "Admin-Add-New-add-new-brand___es"
  }, {
    path: "/es/Admin/Add-New/add-new-campaign",
    component: _7a42b6f5,
    name: "Admin-Add-New-add-new-campaign___es"
  }, {
    path: "/es/Admin/Add-New/add-new-case",
    component: _3d0c60d6,
    name: "Admin-Add-New-add-new-case___es"
  }, {
    path: "/es/Admin/Add-New/add-new-category",
    component: _ed3e683a,
    name: "Admin-Add-New-add-new-category___es"
  }, {
    path: "/es/Admin/Add-New/add-new-channel",
    component: _3b5265a4,
    name: "Admin-Add-New-add-new-channel___es"
  }, {
    path: "/es/Admin/Add-New/add-new-checklist",
    component: _6d6d9f91,
    name: "Admin-Add-New-add-new-checklist___es"
  }, {
    path: "/es/Admin/Add-New/add-new-city",
    component: _e90b4f60,
    name: "Admin-Add-New-add-new-city___es"
  }, {
    path: "/es/Admin/Add-New/add-new-collection",
    component: _afa7637a,
    name: "Admin-Add-New-add-new-collection___es"
  }, {
    path: "/es/Admin/Add-New/add-new-contract",
    component: _1c62f5f7,
    name: "Admin-Add-New-add-new-contract___es"
  }, {
    path: "/es/Admin/Add-New/add-new-country",
    component: _79fd2641,
    name: "Admin-Add-New-add-new-country___es"
  }, {
    path: "/es/Admin/Add-New/add-new-coupon",
    component: _0a03824b,
    name: "Admin-Add-New-add-new-coupon___es"
  }, {
    path: "/es/Admin/Add-New/add-new-currency",
    component: _a8378514,
    name: "Admin-Add-New-add-new-currency___es"
  }, {
    path: "/es/Admin/Add-New/add-new-customer",
    component: _b4b9c27a,
    name: "Admin-Add-New-add-new-customer___es"
  }, {
    path: "/es/Admin/Add-New/add-new-customergroup",
    component: _2e41c84c,
    name: "Admin-Add-New-add-new-customergroup___es"
  }, {
    path: "/es/Admin/Add-New/add-new-deepdive",
    component: _f80dfa76,
    name: "Admin-Add-New-add-new-deepdive___es"
  }, {
    path: "/es/Admin/Add-New/add-new-email",
    component: _b2795ff2,
    name: "Admin-Add-New-add-new-email___es"
  }, {
    path: "/es/Admin/Add-New/add-new-emailtemplates",
    component: _074b40c2,
    name: "Admin-Add-New-add-new-emailtemplates___es"
  }, {
    path: "/es/Admin/Add-New/add-new-eosr",
    component: _d2eacf24,
    name: "Admin-Add-New-add-new-eosr___es"
  }, {
    path: "/es/Admin/Add-New/add-new-event",
    component: _2a3fc805,
    name: "Admin-Add-New-add-new-event___es"
  }, {
    path: "/es/Admin/Add-New/add-new-fullfilment",
    component: _164720ba,
    name: "Admin-Add-New-add-new-fullfilment___es"
  }, {
    path: "/es/Admin/Add-New/add-new-gift-certificates",
    component: _4406e4a4,
    name: "Admin-Add-New-add-new-gift-certificates___es"
  }, {
    path: "/es/Admin/Add-New/add-new-glossary",
    component: _5e40c903,
    name: "Admin-Add-New-add-new-glossary___es"
  }, {
    path: "/es/Admin/Add-New/add-new-invoice",
    component: _c2c32350,
    name: "Admin-Add-New-add-new-invoice___es"
  }, {
    path: "/es/Admin/Add-New/add-new-knowledgebase",
    component: _1a64f03a,
    name: "Admin-Add-New-add-new-knowledgebase___es"
  }, {
    path: "/es/Admin/Add-New/add-new-lead",
    component: _3d37fdc1,
    name: "Admin-Add-New-add-new-lead___es"
  }, {
    path: "/es/Admin/Add-New/add-new-meeting",
    component: _c54f8334,
    name: "Admin-Add-New-add-new-meeting___es"
  }, {
    path: "/es/Admin/Add-New/add-new-newsletter",
    component: _7e101ede,
    name: "Admin-Add-New-add-new-newsletter___es"
  }, {
    path: "/es/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _63c7e73f,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___es"
  }, {
    path: "/es/Admin/Add-New/add-new-occassion",
    component: _563da4be,
    name: "Admin-Add-New-add-new-occassion___es"
  }, {
    path: "/es/Admin/Add-New/add-new-ooto",
    component: _b23e2980,
    name: "Admin-Add-New-add-new-ooto___es"
  }, {
    path: "/es/Admin/Add-New/add-new-opportunity",
    component: _7ba50d7e,
    name: "Admin-Add-New-add-new-opportunity___es"
  }, {
    path: "/es/Admin/Add-New/add-new-page",
    component: _136eef74,
    name: "Admin-Add-New-add-new-page___es"
  }, {
    path: "/es/Admin/Add-New/add-new-partner",
    component: _0c18c273,
    name: "Admin-Add-New-add-new-partner___es"
  }, {
    path: "/es/Admin/Add-New/add-new-pdftemplates",
    component: _8f249328,
    name: "Admin-Add-New-add-new-pdftemplates___es"
  }, {
    path: "/es/Admin/Add-New/add-new-permission",
    component: _3feb64f4,
    name: "Admin-Add-New-add-new-permission___es"
  }, {
    path: "/es/Admin/Add-New/add-new-product",
    component: _7917471a,
    name: "Admin-Add-New-add-new-product___es"
  }, {
    path: "/es/Admin/Add-New/add-new-producttype",
    component: _0544cf58,
    name: "Admin-Add-New-add-new-producttype___es"
  }, {
    path: "/es/Admin/Add-New/add-new-project",
    component: _cc0abf78,
    name: "Admin-Add-New-add-new-project___es"
  }, {
    path: "/es/Admin/Add-New/add-new-quote",
    component: _60085a32,
    name: "Admin-Add-New-add-new-quote___es"
  }, {
    path: "/es/Admin/Add-New/add-new-report",
    component: _58cbc859,
    name: "Admin-Add-New-add-new-report___es"
  }, {
    path: "/es/Admin/Add-New/add-new-return",
    component: _35615255,
    name: "Admin-Add-New-add-new-return___es"
  }, {
    path: "/es/Admin/Add-New/add-new-review",
    component: _74a8b87d,
    name: "Admin-Add-New-add-new-review___es"
  }, {
    path: "/es/Admin/Add-New/add-new-rewards",
    component: _0899eecf,
    name: "Admin-Add-New-add-new-rewards___es"
  }, {
    path: "/es/Admin/Add-New/add-new-role",
    component: _5f5e7c4a,
    name: "Admin-Add-New-add-new-role___es"
  }, {
    path: "/es/Admin/Add-New/add-new-schedule",
    component: _9583a608,
    name: "Admin-Add-New-add-new-schedule___es"
  }, {
    path: "/es/Admin/Add-New/add-new-segment",
    component: _cd995144,
    name: "Admin-Add-New-add-new-segment___es"
  }, {
    path: "/es/Admin/Add-New/add-new-shipment",
    component: _4db3d27f,
    name: "Admin-Add-New-add-new-shipment___es"
  }, {
    path: "/es/Admin/Add-New/add-new-shop",
    component: _68c0474a,
    name: "Admin-Add-New-add-new-shop___es"
  }, {
    path: "/es/Admin/Add-New/add-new-staffmembers",
    component: _07bb951e,
    name: "Admin-Add-New-add-new-staffmembers___es"
  }, {
    path: "/es/Admin/Add-New/add-new-state",
    component: _a7e77308,
    name: "Admin-Add-New-add-new-state___es"
  }, {
    path: "/es/Admin/Add-New/add-new-survey",
    component: _84fcd102,
    name: "Admin-Add-New-add-new-survey___es"
  }, {
    path: "/es/Admin/Add-New/add-new-tag",
    component: _50006dc5,
    name: "Admin-Add-New-add-new-tag___es"
  }, {
    path: "/es/Admin/Add-New/add-new-target",
    component: _02ae6e36,
    name: "Admin-Add-New-add-new-target___es"
  }, {
    path: "/es/Admin/Add-New/add-new-task",
    component: _707b512c,
    name: "Admin-Add-New-add-new-task___es"
  }, {
    path: "/es/Admin/Add-New/add-new-taxrate",
    component: _72b44b36,
    name: "Admin-Add-New-add-new-taxrate___es"
  }, {
    path: "/es/Admin/Add-New/add-new-taxrule",
    component: _f1ebb15c,
    name: "Admin-Add-New-add-new-taxrule___es"
  }, {
    path: "/es/Admin/Add-New/add-new-ticket",
    component: _62393231,
    name: "Admin-Add-New-add-new-ticket___es"
  }, {
    path: "/es/Admin/Add-New/add-new-visit",
    component: _cf2a3b94,
    name: "Admin-Add-New-add-new-visit___es"
  }, {
    path: "/es/Admin/Add-New/add-new-warehouse",
    component: _46cc322e,
    name: "Admin-Add-New-add-new-warehouse___es"
  }, {
    path: "/es/Admin/Add-New/add-new-website",
    component: _9cc8c67a,
    name: "Admin-Add-New-add-new-website___es"
  }, {
    path: "/es/Admin/Add-New/add-new-workspace",
    component: _1478aa00,
    name: "Admin-Add-New-add-new-workspace___es"
  }, {
    path: "/es/Admin/Add-New/add-new-zone",
    component: _12c3da11,
    name: "Admin-Add-New-add-new-zone___es"
  }, {
    path: "/es/Admin/Content/blog",
    component: _119f4bb3,
    name: "Admin-Content-blog___es"
  }, {
    path: "/es/Admin/Content/glossary",
    component: _1369e3af,
    name: "Admin-Content-glossary___es"
  }, {
    path: "/es/Admin/Content/media-manager",
    component: _80d4c5fa,
    name: "Admin-Content-media-manager___es"
  }, {
    path: "/es/Admin/Content/pages",
    component: _206b6503,
    name: "Admin-Content-pages___es"
  }, {
    path: "/es/Admin/Content/projects",
    component: _5e2e240b,
    name: "Admin-Content-projects___es"
  }, {
    path: "/es/Admin/Content/tags",
    component: _0c923caa,
    name: "Admin-Content-tags___es"
  }, {
    path: "/es/Admin/Content/websites",
    component: _6fd7eb28,
    name: "Admin-Content-websites___es"
  }, {
    path: "/es/Admin/Content/workspaces",
    component: _54ab1462,
    name: "Admin-Content-workspaces___es"
  }, {
    path: "/es/Admin/Customers/all-customers",
    component: _181ba98c,
    name: "Admin-Customers-all-customers___es"
  }, {
    path: "/es/Admin/Customers/leads",
    component: _3079f20c,
    name: "Admin-Customers-leads___es"
  }, {
    path: "/es/Admin/Customers/meetings",
    component: _e2c39df6,
    name: "Admin-Customers-meetings___es"
  }, {
    path: "/es/Admin/Customers/online-customers",
    component: _497a7e48,
    name: "Admin-Customers-online-customers___es"
  }, {
    path: "/es/Admin/Customers/opportunities",
    component: _274cf114,
    name: "Admin-Customers-opportunities___es"
  }, {
    path: "/es/Admin/Customers/segments",
    component: _0e26370d,
    name: "Admin-Customers-segments___es"
  }, {
    path: "/es/Admin/Customers/social-groups",
    component: _71eeddd2,
    name: "Admin-Customers-social-groups___es"
  }, {
    path: "/es/Admin/Customers/to-do",
    component: _4c944f00,
    name: "Admin-Customers-to-do___es"
  }, {
    path: "/es/Admin/Marketing/checklists",
    component: _25383f0b,
    name: "Admin-Marketing-checklists___es"
  }, {
    path: "/es/Admin/Marketing/communications",
    component: _4d1b7bdb,
    name: "Admin-Marketing-communications___es"
  }, {
    path: "/es/Admin/Marketing/contracts",
    component: _f9a460da,
    name: "Admin-Marketing-contracts___es"
  }, {
    path: "/es/Admin/Marketing/events",
    component: _55c0b997,
    name: "Admin-Marketing-events___es"
  }, {
    path: "/es/Admin/Marketing/invitations",
    component: _26a05228,
    name: "Admin-Marketing-invitations___es"
  }, {
    path: "/es/Admin/Marketing/newsletter",
    component: _5f566a37,
    name: "Admin-Marketing-newsletter___es"
  }, {
    path: "/es/Admin/Marketing/reviews",
    component: _7b3a138d,
    name: "Admin-Marketing-reviews___es"
  }, {
    path: "/es/Admin/Marketing/rewards",
    component: _5fba0a16,
    name: "Admin-Marketing-rewards___es"
  }, {
    path: "/es/Admin/Marketing/seo",
    component: _4c35b062,
    name: "Admin-Marketing-seo___es"
  }, {
    path: "/es/Admin/Marketing/ticketing",
    component: _dfeac670,
    name: "Admin-Marketing-ticketing___es"
  }, {
    path: "/es/Admin/Marketing/training",
    component: _3dd01758,
    name: "Admin-Marketing-training___es"
  }, {
    path: "/es/Admin/Marketing/visits",
    component: _a60e34f4,
    name: "Admin-Marketing-visits___es"
  }, {
    path: "/es/Admin/Reports/calendars",
    component: _23cd242e,
    name: "Admin-Reports-calendars___es"
  }, {
    path: "/es/Admin/Reports/cases",
    component: _7b2483fc,
    name: "Admin-Reports-cases___es"
  }, {
    path: "/es/Admin/Reports/deep-dive",
    component: _b4450524,
    name: "Admin-Reports-deep-dive___es"
  }, {
    path: "/es/Admin/Reports/eosr",
    component: _4c18b240,
    name: "Admin-Reports-eosr___es"
  }, {
    path: "/es/Admin/Reports/ooto",
    component: _2b6c0c9c,
    name: "Admin-Reports-ooto___es"
  }, {
    path: "/es/Admin/Reports/reports",
    component: _62e0e838,
    name: "Admin-Reports-reports___es"
  }, {
    path: "/es/Admin/Reports/statistics",
    component: _38c1773a,
    name: "Admin-Reports-statistics___es"
  }, {
    path: "/es/Admin/Reports/surveys",
    component: _d636045c,
    name: "Admin-Reports-surveys___es"
  }, {
    path: "/es/Admin/Reports/team-scheduler",
    component: _2a51a03c,
    name: "Admin-Reports-team-scheduler___es"
  }, {
    path: "/es/Admin/Sales/agreements",
    component: _1e09300d,
    name: "Admin-Sales-agreements___es"
  }, {
    path: "/es/Admin/Sales/certificates",
    component: _25128da0,
    name: "Admin-Sales-certificates___es"
  }, {
    path: "/es/Admin/Sales/credit-memos",
    component: _41047209,
    name: "Admin-Sales-credit-memos___es"
  }, {
    path: "/es/Admin/Sales/invoices",
    component: _438ac06c,
    name: "Admin-Sales-invoices___es"
  }, {
    path: "/es/Admin/Sales/orders",
    component: _b746a96e,
    name: "Admin-Sales-orders___es"
  }, {
    path: "/es/Admin/Sales/quotes",
    component: _788f7e4a,
    name: "Admin-Sales-quotes___es"
  }, {
    path: "/es/Admin/Sales/returns",
    component: _08ad88e2,
    name: "Admin-Sales-returns___es"
  }, {
    path: "/es/Admin/Sales/shipments",
    component: _7306bc65,
    name: "Admin-Sales-shipments___es"
  }, {
    path: "/es/Admin/Sales/transactions",
    component: _3b689e8e,
    name: "Admin-Sales-transactions___es"
  }, {
    path: "/es/Admin/Shop/attributes",
    component: _18b94d25,
    name: "Admin-Shop-attributes___es"
  }, {
    path: "/es/Admin/Shop/brands",
    component: _4a7f5bcc,
    name: "Admin-Shop-brands___es"
  }, {
    path: "/es/Admin/Shop/categories",
    component: _8b06012c,
    name: "Admin-Shop-categories___es"
  }, {
    path: "/es/Admin/Shop/collections",
    component: _487727b7,
    name: "Admin-Shop-collections___es"
  }, {
    path: "/es/Admin/Shop/coupons",
    component: _49156fa2,
    name: "Admin-Shop-coupons___es"
  }, {
    path: "/es/Admin/Shop/inventory",
    component: _18424b04,
    name: "Admin-Shop-inventory___es"
  }, {
    path: "/es/Admin/Shop/manufacturers",
    component: _c052c038,
    name: "Admin-Shop-manufacturers___es"
  }, {
    path: "/es/Admin/Shop/occassions",
    component: _7c399f6a,
    name: "Admin-Shop-occassions___es"
  }, {
    path: "/es/Admin/Shop/partners",
    component: _04ea4bf9,
    name: "Admin-Shop-partners___es"
  }, {
    path: "/es/Admin/Shop/product-types",
    component: _f5bf0286,
    name: "Admin-Shop-product-types___es"
  }, {
    path: "/es/Admin/Shop/products",
    component: _37bc5c32,
    name: "Admin-Shop-products___es"
  }, {
    path: "/es/Admin/Shop/shops",
    component: _df8c7c42,
    name: "Admin-Shop-shops___es"
  }, {
    path: "/es/Admin/Shop/warehouses",
    component: _e54e8544,
    name: "Admin-Shop-warehouses___es"
  }, {
    path: "/es/Admin/Shop/wishlists",
    component: _2e377b70,
    name: "Admin-Shop-wishlists___es"
  }, {
    path: "/es/Admin/System/export-management",
    component: _ce853076,
    name: "Admin-System-export-management___es"
  }, {
    path: "/es/Admin/System/general-settings",
    component: _6506f4af,
    name: "Admin-System-general-settings___es"
  }, {
    path: "/es/Admin/System/import-management",
    component: _51a5f098,
    name: "Admin-System-import-management___es"
  }, {
    path: "/es/Admin/System/integrations",
    component: _08550b34,
    name: "Admin-System-integrations___es"
  }, {
    path: "/es/Admin/System/knowledgebase",
    component: _d0a3e1d0,
    name: "Admin-System-knowledgebase___es"
  }, {
    path: "/es/Admin/System/role-manager",
    component: _1eecdf1d,
    name: "Admin-System-role-manager___es"
  }, {
    path: "/es/Admin/System/settings",
    component: _722d3eea,
    name: "Admin-System-settings___es"
  }, {
    path: "/fr/Admin/Add-New/add-new-agreement",
    component: _130b4df5,
    name: "Admin-Add-New-add-new-agreement___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-agreement%20copy",
    component: _2dbb7670,
    name: "Admin-Add-New-add-new-agreement copy___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-article",
    component: _02c4eba1,
    name: "Admin-Add-New-add-new-article___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-attribute",
    component: _3ac70d87,
    name: "Admin-Add-New-add-new-attribute___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-brand",
    component: _0d193b1c,
    name: "Admin-Add-New-add-new-brand___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-campaign",
    component: _7a42b6f5,
    name: "Admin-Add-New-add-new-campaign___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-case",
    component: _3d0c60d6,
    name: "Admin-Add-New-add-new-case___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-category",
    component: _ed3e683a,
    name: "Admin-Add-New-add-new-category___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-channel",
    component: _3b5265a4,
    name: "Admin-Add-New-add-new-channel___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-checklist",
    component: _6d6d9f91,
    name: "Admin-Add-New-add-new-checklist___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-city",
    component: _e90b4f60,
    name: "Admin-Add-New-add-new-city___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-collection",
    component: _afa7637a,
    name: "Admin-Add-New-add-new-collection___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-contract",
    component: _1c62f5f7,
    name: "Admin-Add-New-add-new-contract___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-country",
    component: _79fd2641,
    name: "Admin-Add-New-add-new-country___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-coupon",
    component: _0a03824b,
    name: "Admin-Add-New-add-new-coupon___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-currency",
    component: _a8378514,
    name: "Admin-Add-New-add-new-currency___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-customer",
    component: _b4b9c27a,
    name: "Admin-Add-New-add-new-customer___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-customergroup",
    component: _2e41c84c,
    name: "Admin-Add-New-add-new-customergroup___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-deepdive",
    component: _f80dfa76,
    name: "Admin-Add-New-add-new-deepdive___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-email",
    component: _b2795ff2,
    name: "Admin-Add-New-add-new-email___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-emailtemplates",
    component: _074b40c2,
    name: "Admin-Add-New-add-new-emailtemplates___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-eosr",
    component: _d2eacf24,
    name: "Admin-Add-New-add-new-eosr___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-event",
    component: _2a3fc805,
    name: "Admin-Add-New-add-new-event___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-fullfilment",
    component: _164720ba,
    name: "Admin-Add-New-add-new-fullfilment___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-gift-certificates",
    component: _4406e4a4,
    name: "Admin-Add-New-add-new-gift-certificates___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-glossary",
    component: _5e40c903,
    name: "Admin-Add-New-add-new-glossary___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-invoice",
    component: _c2c32350,
    name: "Admin-Add-New-add-new-invoice___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-knowledgebase",
    component: _1a64f03a,
    name: "Admin-Add-New-add-new-knowledgebase___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-lead",
    component: _3d37fdc1,
    name: "Admin-Add-New-add-new-lead___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-meeting",
    component: _c54f8334,
    name: "Admin-Add-New-add-new-meeting___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-newsletter",
    component: _7e101ede,
    name: "Admin-Add-New-add-new-newsletter___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-newslettersubscriber%20copy",
    component: _63c7e73f,
    name: "Admin-Add-New-add-new-newslettersubscriber copy___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-occassion",
    component: _563da4be,
    name: "Admin-Add-New-add-new-occassion___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-ooto",
    component: _b23e2980,
    name: "Admin-Add-New-add-new-ooto___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-opportunity",
    component: _7ba50d7e,
    name: "Admin-Add-New-add-new-opportunity___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-page",
    component: _136eef74,
    name: "Admin-Add-New-add-new-page___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-partner",
    component: _0c18c273,
    name: "Admin-Add-New-add-new-partner___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-pdftemplates",
    component: _8f249328,
    name: "Admin-Add-New-add-new-pdftemplates___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-permission",
    component: _3feb64f4,
    name: "Admin-Add-New-add-new-permission___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-product",
    component: _7917471a,
    name: "Admin-Add-New-add-new-product___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-producttype",
    component: _0544cf58,
    name: "Admin-Add-New-add-new-producttype___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-project",
    component: _cc0abf78,
    name: "Admin-Add-New-add-new-project___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-quote",
    component: _60085a32,
    name: "Admin-Add-New-add-new-quote___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-report",
    component: _58cbc859,
    name: "Admin-Add-New-add-new-report___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-return",
    component: _35615255,
    name: "Admin-Add-New-add-new-return___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-review",
    component: _74a8b87d,
    name: "Admin-Add-New-add-new-review___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-rewards",
    component: _0899eecf,
    name: "Admin-Add-New-add-new-rewards___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-role",
    component: _5f5e7c4a,
    name: "Admin-Add-New-add-new-role___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-schedule",
    component: _9583a608,
    name: "Admin-Add-New-add-new-schedule___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-segment",
    component: _cd995144,
    name: "Admin-Add-New-add-new-segment___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-shipment",
    component: _4db3d27f,
    name: "Admin-Add-New-add-new-shipment___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-shop",
    component: _68c0474a,
    name: "Admin-Add-New-add-new-shop___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-staffmembers",
    component: _07bb951e,
    name: "Admin-Add-New-add-new-staffmembers___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-state",
    component: _a7e77308,
    name: "Admin-Add-New-add-new-state___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-survey",
    component: _84fcd102,
    name: "Admin-Add-New-add-new-survey___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-tag",
    component: _50006dc5,
    name: "Admin-Add-New-add-new-tag___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-target",
    component: _02ae6e36,
    name: "Admin-Add-New-add-new-target___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-task",
    component: _707b512c,
    name: "Admin-Add-New-add-new-task___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-taxrate",
    component: _72b44b36,
    name: "Admin-Add-New-add-new-taxrate___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-taxrule",
    component: _f1ebb15c,
    name: "Admin-Add-New-add-new-taxrule___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-ticket",
    component: _62393231,
    name: "Admin-Add-New-add-new-ticket___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-visit",
    component: _cf2a3b94,
    name: "Admin-Add-New-add-new-visit___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-warehouse",
    component: _46cc322e,
    name: "Admin-Add-New-add-new-warehouse___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-website",
    component: _9cc8c67a,
    name: "Admin-Add-New-add-new-website___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-workspace",
    component: _1478aa00,
    name: "Admin-Add-New-add-new-workspace___fr"
  }, {
    path: "/fr/Admin/Add-New/add-new-zone",
    component: _12c3da11,
    name: "Admin-Add-New-add-new-zone___fr"
  }, {
    path: "/fr/Admin/Content/blog",
    component: _119f4bb3,
    name: "Admin-Content-blog___fr"
  }, {
    path: "/fr/Admin/Content/glossary",
    component: _1369e3af,
    name: "Admin-Content-glossary___fr"
  }, {
    path: "/fr/Admin/Content/media-manager",
    component: _80d4c5fa,
    name: "Admin-Content-media-manager___fr"
  }, {
    path: "/fr/Admin/Content/pages",
    component: _206b6503,
    name: "Admin-Content-pages___fr"
  }, {
    path: "/fr/Admin/Content/projects",
    component: _5e2e240b,
    name: "Admin-Content-projects___fr"
  }, {
    path: "/fr/Admin/Content/tags",
    component: _0c923caa,
    name: "Admin-Content-tags___fr"
  }, {
    path: "/fr/Admin/Content/websites",
    component: _6fd7eb28,
    name: "Admin-Content-websites___fr"
  }, {
    path: "/fr/Admin/Content/workspaces",
    component: _54ab1462,
    name: "Admin-Content-workspaces___fr"
  }, {
    path: "/fr/Admin/Customers/all-customers",
    component: _181ba98c,
    name: "Admin-Customers-all-customers___fr"
  }, {
    path: "/fr/Admin/Customers/leads",
    component: _3079f20c,
    name: "Admin-Customers-leads___fr"
  }, {
    path: "/fr/Admin/Customers/meetings",
    component: _e2c39df6,
    name: "Admin-Customers-meetings___fr"
  }, {
    path: "/fr/Admin/Customers/online-customers",
    component: _497a7e48,
    name: "Admin-Customers-online-customers___fr"
  }, {
    path: "/fr/Admin/Customers/opportunities",
    component: _274cf114,
    name: "Admin-Customers-opportunities___fr"
  }, {
    path: "/fr/Admin/Customers/segments",
    component: _0e26370d,
    name: "Admin-Customers-segments___fr"
  }, {
    path: "/fr/Admin/Customers/social-groups",
    component: _71eeddd2,
    name: "Admin-Customers-social-groups___fr"
  }, {
    path: "/fr/Admin/Customers/to-do",
    component: _4c944f00,
    name: "Admin-Customers-to-do___fr"
  }, {
    path: "/fr/Admin/Marketing/checklists",
    component: _25383f0b,
    name: "Admin-Marketing-checklists___fr"
  }, {
    path: "/fr/Admin/Marketing/communications",
    component: _4d1b7bdb,
    name: "Admin-Marketing-communications___fr"
  }, {
    path: "/fr/Admin/Marketing/contracts",
    component: _f9a460da,
    name: "Admin-Marketing-contracts___fr"
  }, {
    path: "/fr/Admin/Marketing/events",
    component: _55c0b997,
    name: "Admin-Marketing-events___fr"
  }, {
    path: "/fr/Admin/Marketing/invitations",
    component: _26a05228,
    name: "Admin-Marketing-invitations___fr"
  }, {
    path: "/fr/Admin/Marketing/newsletter",
    component: _5f566a37,
    name: "Admin-Marketing-newsletter___fr"
  }, {
    path: "/fr/Admin/Marketing/reviews",
    component: _7b3a138d,
    name: "Admin-Marketing-reviews___fr"
  }, {
    path: "/fr/Admin/Marketing/rewards",
    component: _5fba0a16,
    name: "Admin-Marketing-rewards___fr"
  }, {
    path: "/fr/Admin/Marketing/seo",
    component: _4c35b062,
    name: "Admin-Marketing-seo___fr"
  }, {
    path: "/fr/Admin/Marketing/ticketing",
    component: _dfeac670,
    name: "Admin-Marketing-ticketing___fr"
  }, {
    path: "/fr/Admin/Marketing/training",
    component: _3dd01758,
    name: "Admin-Marketing-training___fr"
  }, {
    path: "/fr/Admin/Marketing/visits",
    component: _a60e34f4,
    name: "Admin-Marketing-visits___fr"
  }, {
    path: "/fr/Admin/Reports/calendars",
    component: _23cd242e,
    name: "Admin-Reports-calendars___fr"
  }, {
    path: "/fr/Admin/Reports/cases",
    component: _7b2483fc,
    name: "Admin-Reports-cases___fr"
  }, {
    path: "/fr/Admin/Reports/deep-dive",
    component: _b4450524,
    name: "Admin-Reports-deep-dive___fr"
  }, {
    path: "/fr/Admin/Reports/eosr",
    component: _4c18b240,
    name: "Admin-Reports-eosr___fr"
  }, {
    path: "/fr/Admin/Reports/ooto",
    component: _2b6c0c9c,
    name: "Admin-Reports-ooto___fr"
  }, {
    path: "/fr/Admin/Reports/reports",
    component: _62e0e838,
    name: "Admin-Reports-reports___fr"
  }, {
    path: "/fr/Admin/Reports/statistics",
    component: _38c1773a,
    name: "Admin-Reports-statistics___fr"
  }, {
    path: "/fr/Admin/Reports/surveys",
    component: _d636045c,
    name: "Admin-Reports-surveys___fr"
  }, {
    path: "/fr/Admin/Reports/team-scheduler",
    component: _2a51a03c,
    name: "Admin-Reports-team-scheduler___fr"
  }, {
    path: "/fr/Admin/Sales/agreements",
    component: _1e09300d,
    name: "Admin-Sales-agreements___fr"
  }, {
    path: "/fr/Admin/Sales/certificates",
    component: _25128da0,
    name: "Admin-Sales-certificates___fr"
  }, {
    path: "/fr/Admin/Sales/credit-memos",
    component: _41047209,
    name: "Admin-Sales-credit-memos___fr"
  }, {
    path: "/fr/Admin/Sales/invoices",
    component: _438ac06c,
    name: "Admin-Sales-invoices___fr"
  }, {
    path: "/fr/Admin/Sales/orders",
    component: _b746a96e,
    name: "Admin-Sales-orders___fr"
  }, {
    path: "/fr/Admin/Sales/quotes",
    component: _788f7e4a,
    name: "Admin-Sales-quotes___fr"
  }, {
    path: "/fr/Admin/Sales/returns",
    component: _08ad88e2,
    name: "Admin-Sales-returns___fr"
  }, {
    path: "/fr/Admin/Sales/shipments",
    component: _7306bc65,
    name: "Admin-Sales-shipments___fr"
  }, {
    path: "/fr/Admin/Sales/transactions",
    component: _3b689e8e,
    name: "Admin-Sales-transactions___fr"
  }, {
    path: "/fr/Admin/Shop/attributes",
    component: _18b94d25,
    name: "Admin-Shop-attributes___fr"
  }, {
    path: "/fr/Admin/Shop/brands",
    component: _4a7f5bcc,
    name: "Admin-Shop-brands___fr"
  }, {
    path: "/fr/Admin/Shop/categories",
    component: _8b06012c,
    name: "Admin-Shop-categories___fr"
  }, {
    path: "/fr/Admin/Shop/collections",
    component: _487727b7,
    name: "Admin-Shop-collections___fr"
  }, {
    path: "/fr/Admin/Shop/coupons",
    component: _49156fa2,
    name: "Admin-Shop-coupons___fr"
  }, {
    path: "/fr/Admin/Shop/inventory",
    component: _18424b04,
    name: "Admin-Shop-inventory___fr"
  }, {
    path: "/fr/Admin/Shop/manufacturers",
    component: _c052c038,
    name: "Admin-Shop-manufacturers___fr"
  }, {
    path: "/fr/Admin/Shop/occassions",
    component: _7c399f6a,
    name: "Admin-Shop-occassions___fr"
  }, {
    path: "/fr/Admin/Shop/partners",
    component: _04ea4bf9,
    name: "Admin-Shop-partners___fr"
  }, {
    path: "/fr/Admin/Shop/product-types",
    component: _f5bf0286,
    name: "Admin-Shop-product-types___fr"
  }, {
    path: "/fr/Admin/Shop/products",
    component: _37bc5c32,
    name: "Admin-Shop-products___fr"
  }, {
    path: "/fr/Admin/Shop/shops",
    component: _df8c7c42,
    name: "Admin-Shop-shops___fr"
  }, {
    path: "/fr/Admin/Shop/warehouses",
    component: _e54e8544,
    name: "Admin-Shop-warehouses___fr"
  }, {
    path: "/fr/Admin/Shop/wishlists",
    component: _2e377b70,
    name: "Admin-Shop-wishlists___fr"
  }, {
    path: "/fr/Admin/System/export-management",
    component: _ce853076,
    name: "Admin-System-export-management___fr"
  }, {
    path: "/fr/Admin/System/general-settings",
    component: _6506f4af,
    name: "Admin-System-general-settings___fr"
  }, {
    path: "/fr/Admin/System/import-management",
    component: _51a5f098,
    name: "Admin-System-import-management___fr"
  }, {
    path: "/fr/Admin/System/integrations",
    component: _08550b34,
    name: "Admin-System-integrations___fr"
  }, {
    path: "/fr/Admin/System/knowledgebase",
    component: _d0a3e1d0,
    name: "Admin-System-knowledgebase___fr"
  }, {
    path: "/fr/Admin/System/role-manager",
    component: _1eecdf1d,
    name: "Admin-System-role-manager___fr"
  }, {
    path: "/fr/Admin/System/settings",
    component: _722d3eea,
    name: "Admin-System-settings___fr"
  }, {
    path: "/es/Admin/Customers/customer/newcustomer",
    component: _5d3e7ec3,
    name: "Admin-Customers-customer-newcustomer___es"
  }, {
    path: "/es/Admin/Edit/providers/id",
    component: _140c304b,
    name: "Admin-Edit-providers-id___es"
  }, {
    path: "/es/Admin/Marketing/Email/email-designer",
    component: _08a41f2c,
    name: "Admin-Marketing-Email-email-designer___es"
  }, {
    path: "/fr/Admin/Customers/customer/newcustomer",
    component: _5d3e7ec3,
    name: "Admin-Customers-customer-newcustomer___fr"
  }, {
    path: "/fr/Admin/Edit/providers/id",
    component: _140c304b,
    name: "Admin-Edit-providers-id___fr"
  }, {
    path: "/fr/Admin/Marketing/Email/email-designer",
    component: _08a41f2c,
    name: "Admin-Marketing-Email-email-designer___fr"
  }, {
    path: "/es/Admin/Shop/Product/Edit/:id?",
    component: _f279a122,
    name: "Admin-Shop-Product-Edit-id___es"
  }, {
    path: "/fr/Admin/Shop/Product/Edit/:id?",
    component: _f279a122,
    name: "Admin-Shop-Product-Edit-id___fr"
  }, {
    path: "/Admin/Shop/Product/Edit/:id?",
    component: _f279a122,
    name: "Admin-Shop-Product-Edit-id___en"
  }, {
    path: "/es/Admin/Edit/agreement/:id?",
    component: _d5fd005c,
    name: "Admin-Edit-agreement-id___es"
  }, {
    path: "/es/Admin/Edit/article/:id?",
    component: _06dfb8e6,
    name: "Admin-Edit-article-id___es"
  }, {
    path: "/es/Admin/Edit/attribute/:id?",
    component: _1e2ea900,
    name: "Admin-Edit-attribute-id___es"
  }, {
    path: "/es/Admin/Edit/brand/:id?",
    component: _489dd7f5,
    name: "Admin-Edit-brand-id___es"
  }, {
    path: "/es/Admin/Edit/cases/:id?",
    component: _1aeda88e,
    name: "Admin-Edit-cases-id___es"
  }, {
    path: "/es/Admin/Edit/category/:id?",
    component: _77da5eec,
    name: "Admin-Edit-category-id___es"
  }, {
    path: "/es/Admin/Edit/channel/:id?",
    component: _1cedc779,
    name: "Admin-Edit-channel-id___es"
  }, {
    path: "/es/Admin/Edit/checklist/:id?",
    component: _aac46094,
    name: "Admin-Edit-checklist-id___es"
  }, {
    path: "/es/Admin/Edit/city/:id?",
    component: _2bafec86,
    name: "Admin-Edit-city-id___es"
  }, {
    path: "/es/Admin/Edit/collection/:id?",
    component: _1a108d6a,
    name: "Admin-Edit-collection-id___es"
  }, {
    path: "/es/Admin/Edit/contracts/:id?",
    component: _24d65a1b,
    name: "Admin-Edit-contracts-id___es"
  }, {
    path: "/es/Admin/Edit/country/:id?",
    component: _5cc32246,
    name: "Admin-Edit-country-id___es"
  }, {
    path: "/es/Admin/Edit/coupon/:id?",
    component: _f289703c,
    name: "Admin-Edit-coupon-id___es"
  }, {
    path: "/es/Admin/Edit/currency/:id?",
    component: _ec333a52,
    name: "Admin-Edit-currency-id___es"
  }, {
    path: "/es/Admin/Edit/customergroup/:id?",
    component: _42e9fd5b,
    name: "Admin-Edit-customergroup-id___es"
  }, {
    path: "/es/Admin/Edit/deep-dive/:id?",
    component: _53e7ec07,
    name: "Admin-Edit-deep-dive-id___es"
  }, {
    path: "/es/Admin/Edit/email_template/:id?",
    component: _5f4d222b,
    name: "Admin-Edit-email_template-id___es"
  }, {
    path: "/es/Admin/Edit/event/:id?",
    component: _0ba0f642,
    name: "Admin-Edit-event-id___es"
  }, {
    path: "/es/Admin/Edit/fullfillment/:id?",
    component: _7112bdd8,
    name: "Admin-Edit-fullfillment-id___es"
  }, {
    path: "/es/Admin/Edit/gift-certificate/:id?",
    component: _72c06e8e,
    name: "Admin-Edit-gift-certificate-id___es"
  }, {
    path: "/es/Admin/Edit/glossary/:id?",
    component: _1344076a,
    name: "Admin-Edit-glossary-id___es"
  }, {
    path: "/es/Admin/Edit/invoice/:id?",
    component: _0e235ee2,
    name: "Admin-Edit-invoice-id___es"
  }, {
    path: "/es/Admin/Edit/knowledgebase/:id?",
    component: _d06ecba6,
    name: "Admin-Edit-knowledgebase-id___es"
  }, {
    path: "/es/Admin/Edit/leads/:id?",
    component: _7dff08e5,
    name: "Admin-Edit-leads-id___es"
  }, {
    path: "/es/Admin/Edit/meeting/:id?",
    component: _4dba5941,
    name: "Admin-Edit-meeting-id___es"
  }, {
    path: "/es/Admin/Edit/newsletter/:id?",
    component: _728de5af,
    name: "Admin-Edit-newsletter-id___es"
  }, {
    path: "/es/Admin/Edit/newslettersubscriber/:id?",
    component: _3126c3f2,
    name: "Admin-Edit-newslettersubscriber-id___es"
  }, {
    path: "/es/Admin/Edit/occassion/:id?",
    component: _5e808ba6,
    name: "Admin-Edit-occassion-id___es"
  }, {
    path: "/es/Admin/Edit/ooto/:id?",
    component: _88d06666,
    name: "Admin-Edit-ooto-id___es"
  }, {
    path: "/es/Admin/Edit/opportunities/:id?",
    component: _67a74bea,
    name: "Admin-Edit-opportunities-id___es"
  }, {
    path: "/es/Admin/Edit/page/:id?",
    component: _23e84919,
    name: "Admin-Edit-page-id___es"
  }, {
    path: "/es/Admin/Edit/partner/:id?",
    component: _6cdb5554,
    name: "Admin-Edit-partner-id___es"
  }, {
    path: "/es/Admin/Edit/pdf_template/:id?",
    component: _b7fef8fe,
    name: "Admin-Edit-pdf_template-id___es"
  }, {
    path: "/es/Admin/Edit/permission/:id?",
    component: _3a58fd59,
    name: "Admin-Edit-permission-id___es"
  }, {
    path: "/es/Admin/Edit/product-type/:id?",
    component: _1f584670,
    name: "Admin-Edit-product-type-id___es"
  }, {
    path: "/es/Admin/Edit/product/:id?",
    component: _696ebde6,
    name: "Admin-Edit-product-id___es"
  }, {
    path: "/es/Admin/Edit/projects/:id?",
    component: _93b4bee4,
    name: "Admin-Edit-projects-id___es"
  }, {
    path: "/es/Admin/Edit/quotes/:id?",
    component: _382279b1,
    name: "Admin-Edit-quotes-id___es"
  }, {
    path: "/es/Admin/Edit/report/:id?",
    component: _7fdacad8,
    name: "Admin-Edit-report-id___es"
  }, {
    path: "/es/Admin/Edit/return/:id?",
    component: _22e023d0,
    name: "Admin-Edit-return-id___es"
  }, {
    path: "/es/Admin/Edit/review/:id?",
    component: _763a20f0,
    name: "Admin-Edit-review-id___es"
  }, {
    path: "/es/Admin/Edit/reward/:id?",
    component: _d54caa0e,
    name: "Admin-Edit-reward-id___es"
  }, {
    path: "/es/Admin/Edit/role/:id?",
    component: _551cdf12,
    name: "Admin-Edit-role-id___es"
  }, {
    path: "/es/Admin/Edit/segment/:id?",
    component: _1e401b49,
    name: "Admin-Edit-segment-id___es"
  }, {
    path: "/es/Admin/Edit/shipment/:id?",
    component: _02e78b6e,
    name: "Admin-Edit-shipment-id___es"
  }, {
    path: "/es/Admin/Edit/shops/:id?",
    component: _45efe802,
    name: "Admin-Edit-shops-id___es"
  }, {
    path: "/es/Admin/Edit/state/:id?",
    component: _d1f82baa,
    name: "Admin-Edit-state-id___es"
  }, {
    path: "/es/Admin/Edit/tag/:id?",
    component: _3e15b3c2,
    name: "Admin-Edit-tag-id___es"
  }, {
    path: "/es/Admin/Edit/target/:id?",
    component: _07a3d252,
    name: "Admin-Edit-target-id___es"
  }, {
    path: "/es/Admin/Edit/tasks/:id?",
    component: _6f9fbfce,
    name: "Admin-Edit-tasks-id___es"
  }, {
    path: "/es/Admin/Edit/taxrate/:id?",
    component: _4ef5ce71,
    name: "Admin-Edit-taxrate-id___es"
  }, {
    path: "/es/Admin/Edit/taxrule/:id?",
    component: _41b123d5,
    name: "Admin-Edit-taxrule-id___es"
  }, {
    path: "/es/Admin/Edit/ticket/:id?",
    component: _303597bc,
    name: "Admin-Edit-ticket-id___es"
  }, {
    path: "/es/Admin/Edit/visit/:id?",
    component: _71f392b1,
    name: "Admin-Edit-visit-id___es"
  }, {
    path: "/es/Admin/Edit/warehouse/:id?",
    component: _2b735739,
    name: "Admin-Edit-warehouse-id___es"
  }, {
    path: "/es/Admin/Edit/zone/:id?",
    component: _1a030ec8,
    name: "Admin-Edit-zone-id___es"
  }, {
    path: "/es/Admin/Marketing/Email/:id?",
    component: _2f457988,
    name: "Admin-Marketing-Email-id___es"
  }, {
    path: "/fr/Admin/Edit/agreement/:id?",
    component: _d5fd005c,
    name: "Admin-Edit-agreement-id___fr"
  }, {
    path: "/fr/Admin/Edit/article/:id?",
    component: _06dfb8e6,
    name: "Admin-Edit-article-id___fr"
  }, {
    path: "/fr/Admin/Edit/attribute/:id?",
    component: _1e2ea900,
    name: "Admin-Edit-attribute-id___fr"
  }, {
    path: "/fr/Admin/Edit/brand/:id?",
    component: _489dd7f5,
    name: "Admin-Edit-brand-id___fr"
  }, {
    path: "/fr/Admin/Edit/cases/:id?",
    component: _1aeda88e,
    name: "Admin-Edit-cases-id___fr"
  }, {
    path: "/fr/Admin/Edit/category/:id?",
    component: _77da5eec,
    name: "Admin-Edit-category-id___fr"
  }, {
    path: "/fr/Admin/Edit/channel/:id?",
    component: _1cedc779,
    name: "Admin-Edit-channel-id___fr"
  }, {
    path: "/fr/Admin/Edit/checklist/:id?",
    component: _aac46094,
    name: "Admin-Edit-checklist-id___fr"
  }, {
    path: "/fr/Admin/Edit/city/:id?",
    component: _2bafec86,
    name: "Admin-Edit-city-id___fr"
  }, {
    path: "/fr/Admin/Edit/collection/:id?",
    component: _1a108d6a,
    name: "Admin-Edit-collection-id___fr"
  }, {
    path: "/fr/Admin/Edit/contracts/:id?",
    component: _24d65a1b,
    name: "Admin-Edit-contracts-id___fr"
  }, {
    path: "/fr/Admin/Edit/country/:id?",
    component: _5cc32246,
    name: "Admin-Edit-country-id___fr"
  }, {
    path: "/fr/Admin/Edit/coupon/:id?",
    component: _f289703c,
    name: "Admin-Edit-coupon-id___fr"
  }, {
    path: "/fr/Admin/Edit/currency/:id?",
    component: _ec333a52,
    name: "Admin-Edit-currency-id___fr"
  }, {
    path: "/fr/Admin/Edit/customergroup/:id?",
    component: _42e9fd5b,
    name: "Admin-Edit-customergroup-id___fr"
  }, {
    path: "/fr/Admin/Edit/deep-dive/:id?",
    component: _53e7ec07,
    name: "Admin-Edit-deep-dive-id___fr"
  }, {
    path: "/fr/Admin/Edit/email_template/:id?",
    component: _5f4d222b,
    name: "Admin-Edit-email_template-id___fr"
  }, {
    path: "/fr/Admin/Edit/event/:id?",
    component: _0ba0f642,
    name: "Admin-Edit-event-id___fr"
  }, {
    path: "/fr/Admin/Edit/fullfillment/:id?",
    component: _7112bdd8,
    name: "Admin-Edit-fullfillment-id___fr"
  }, {
    path: "/fr/Admin/Edit/gift-certificate/:id?",
    component: _72c06e8e,
    name: "Admin-Edit-gift-certificate-id___fr"
  }, {
    path: "/fr/Admin/Edit/glossary/:id?",
    component: _1344076a,
    name: "Admin-Edit-glossary-id___fr"
  }, {
    path: "/fr/Admin/Edit/invoice/:id?",
    component: _0e235ee2,
    name: "Admin-Edit-invoice-id___fr"
  }, {
    path: "/fr/Admin/Edit/knowledgebase/:id?",
    component: _d06ecba6,
    name: "Admin-Edit-knowledgebase-id___fr"
  }, {
    path: "/fr/Admin/Edit/leads/:id?",
    component: _7dff08e5,
    name: "Admin-Edit-leads-id___fr"
  }, {
    path: "/fr/Admin/Edit/meeting/:id?",
    component: _4dba5941,
    name: "Admin-Edit-meeting-id___fr"
  }, {
    path: "/fr/Admin/Edit/newsletter/:id?",
    component: _728de5af,
    name: "Admin-Edit-newsletter-id___fr"
  }, {
    path: "/fr/Admin/Edit/newslettersubscriber/:id?",
    component: _3126c3f2,
    name: "Admin-Edit-newslettersubscriber-id___fr"
  }, {
    path: "/fr/Admin/Edit/occassion/:id?",
    component: _5e808ba6,
    name: "Admin-Edit-occassion-id___fr"
  }, {
    path: "/fr/Admin/Edit/ooto/:id?",
    component: _88d06666,
    name: "Admin-Edit-ooto-id___fr"
  }, {
    path: "/fr/Admin/Edit/opportunities/:id?",
    component: _67a74bea,
    name: "Admin-Edit-opportunities-id___fr"
  }, {
    path: "/fr/Admin/Edit/page/:id?",
    component: _23e84919,
    name: "Admin-Edit-page-id___fr"
  }, {
    path: "/fr/Admin/Edit/partner/:id?",
    component: _6cdb5554,
    name: "Admin-Edit-partner-id___fr"
  }, {
    path: "/fr/Admin/Edit/pdf_template/:id?",
    component: _b7fef8fe,
    name: "Admin-Edit-pdf_template-id___fr"
  }, {
    path: "/fr/Admin/Edit/permission/:id?",
    component: _3a58fd59,
    name: "Admin-Edit-permission-id___fr"
  }, {
    path: "/fr/Admin/Edit/product-type/:id?",
    component: _1f584670,
    name: "Admin-Edit-product-type-id___fr"
  }, {
    path: "/fr/Admin/Edit/product/:id?",
    component: _696ebde6,
    name: "Admin-Edit-product-id___fr"
  }, {
    path: "/fr/Admin/Edit/projects/:id?",
    component: _93b4bee4,
    name: "Admin-Edit-projects-id___fr"
  }, {
    path: "/fr/Admin/Edit/quotes/:id?",
    component: _382279b1,
    name: "Admin-Edit-quotes-id___fr"
  }, {
    path: "/fr/Admin/Edit/report/:id?",
    component: _7fdacad8,
    name: "Admin-Edit-report-id___fr"
  }, {
    path: "/fr/Admin/Edit/return/:id?",
    component: _22e023d0,
    name: "Admin-Edit-return-id___fr"
  }, {
    path: "/fr/Admin/Edit/review/:id?",
    component: _763a20f0,
    name: "Admin-Edit-review-id___fr"
  }, {
    path: "/fr/Admin/Edit/reward/:id?",
    component: _d54caa0e,
    name: "Admin-Edit-reward-id___fr"
  }, {
    path: "/fr/Admin/Edit/role/:id?",
    component: _551cdf12,
    name: "Admin-Edit-role-id___fr"
  }, {
    path: "/fr/Admin/Edit/segment/:id?",
    component: _1e401b49,
    name: "Admin-Edit-segment-id___fr"
  }, {
    path: "/fr/Admin/Edit/shipment/:id?",
    component: _02e78b6e,
    name: "Admin-Edit-shipment-id___fr"
  }, {
    path: "/fr/Admin/Edit/shops/:id?",
    component: _45efe802,
    name: "Admin-Edit-shops-id___fr"
  }, {
    path: "/fr/Admin/Edit/state/:id?",
    component: _d1f82baa,
    name: "Admin-Edit-state-id___fr"
  }, {
    path: "/fr/Admin/Edit/tag/:id?",
    component: _3e15b3c2,
    name: "Admin-Edit-tag-id___fr"
  }, {
    path: "/fr/Admin/Edit/target/:id?",
    component: _07a3d252,
    name: "Admin-Edit-target-id___fr"
  }, {
    path: "/fr/Admin/Edit/tasks/:id?",
    component: _6f9fbfce,
    name: "Admin-Edit-tasks-id___fr"
  }, {
    path: "/fr/Admin/Edit/taxrate/:id?",
    component: _4ef5ce71,
    name: "Admin-Edit-taxrate-id___fr"
  }, {
    path: "/fr/Admin/Edit/taxrule/:id?",
    component: _41b123d5,
    name: "Admin-Edit-taxrule-id___fr"
  }, {
    path: "/fr/Admin/Edit/ticket/:id?",
    component: _303597bc,
    name: "Admin-Edit-ticket-id___fr"
  }, {
    path: "/fr/Admin/Edit/visit/:id?",
    component: _71f392b1,
    name: "Admin-Edit-visit-id___fr"
  }, {
    path: "/fr/Admin/Edit/warehouse/:id?",
    component: _2b735739,
    name: "Admin-Edit-warehouse-id___fr"
  }, {
    path: "/fr/Admin/Edit/zone/:id?",
    component: _1a030ec8,
    name: "Admin-Edit-zone-id___fr"
  }, {
    path: "/fr/Admin/Marketing/Email/:id?",
    component: _2f457988,
    name: "Admin-Marketing-Email-id___fr"
  }, {
    path: "/Admin/Edit/agreement/:id?",
    component: _d5fd005c,
    name: "Admin-Edit-agreement-id___en"
  }, {
    path: "/Admin/Edit/article/:id?",
    component: _06dfb8e6,
    name: "Admin-Edit-article-id___en"
  }, {
    path: "/Admin/Edit/attribute/:id?",
    component: _1e2ea900,
    name: "Admin-Edit-attribute-id___en"
  }, {
    path: "/Admin/Edit/brand/:id?",
    component: _489dd7f5,
    name: "Admin-Edit-brand-id___en"
  }, {
    path: "/Admin/Edit/cases/:id?",
    component: _1aeda88e,
    name: "Admin-Edit-cases-id___en"
  }, {
    path: "/Admin/Edit/category/:id?",
    component: _77da5eec,
    name: "Admin-Edit-category-id___en"
  }, {
    path: "/Admin/Edit/channel/:id?",
    component: _1cedc779,
    name: "Admin-Edit-channel-id___en"
  }, {
    path: "/Admin/Edit/checklist/:id?",
    component: _aac46094,
    name: "Admin-Edit-checklist-id___en"
  }, {
    path: "/Admin/Edit/city/:id?",
    component: _2bafec86,
    name: "Admin-Edit-city-id___en"
  }, {
    path: "/Admin/Edit/collection/:id?",
    component: _1a108d6a,
    name: "Admin-Edit-collection-id___en"
  }, {
    path: "/Admin/Edit/contracts/:id?",
    component: _24d65a1b,
    name: "Admin-Edit-contracts-id___en"
  }, {
    path: "/Admin/Edit/country/:id?",
    component: _5cc32246,
    name: "Admin-Edit-country-id___en"
  }, {
    path: "/Admin/Edit/coupon/:id?",
    component: _f289703c,
    name: "Admin-Edit-coupon-id___en"
  }, {
    path: "/Admin/Edit/currency/:id?",
    component: _ec333a52,
    name: "Admin-Edit-currency-id___en"
  }, {
    path: "/Admin/Edit/customergroup/:id?",
    component: _42e9fd5b,
    name: "Admin-Edit-customergroup-id___en"
  }, {
    path: "/Admin/Edit/deep-dive/:id?",
    component: _53e7ec07,
    name: "Admin-Edit-deep-dive-id___en"
  }, {
    path: "/Admin/Edit/email_template/:id?",
    component: _5f4d222b,
    name: "Admin-Edit-email_template-id___en"
  }, {
    path: "/Admin/Edit/event/:id?",
    component: _0ba0f642,
    name: "Admin-Edit-event-id___en"
  }, {
    path: "/Admin/Edit/fullfillment/:id?",
    component: _7112bdd8,
    name: "Admin-Edit-fullfillment-id___en"
  }, {
    path: "/Admin/Edit/gift-certificate/:id?",
    component: _72c06e8e,
    name: "Admin-Edit-gift-certificate-id___en"
  }, {
    path: "/Admin/Edit/glossary/:id?",
    component: _1344076a,
    name: "Admin-Edit-glossary-id___en"
  }, {
    path: "/Admin/Edit/invoice/:id?",
    component: _0e235ee2,
    name: "Admin-Edit-invoice-id___en"
  }, {
    path: "/Admin/Edit/knowledgebase/:id?",
    component: _d06ecba6,
    name: "Admin-Edit-knowledgebase-id___en"
  }, {
    path: "/Admin/Edit/leads/:id?",
    component: _7dff08e5,
    name: "Admin-Edit-leads-id___en"
  }, {
    path: "/Admin/Edit/meeting/:id?",
    component: _4dba5941,
    name: "Admin-Edit-meeting-id___en"
  }, {
    path: "/Admin/Edit/newsletter/:id?",
    component: _728de5af,
    name: "Admin-Edit-newsletter-id___en"
  }, {
    path: "/Admin/Edit/newslettersubscriber/:id?",
    component: _3126c3f2,
    name: "Admin-Edit-newslettersubscriber-id___en"
  }, {
    path: "/Admin/Edit/occassion/:id?",
    component: _5e808ba6,
    name: "Admin-Edit-occassion-id___en"
  }, {
    path: "/Admin/Edit/ooto/:id?",
    component: _88d06666,
    name: "Admin-Edit-ooto-id___en"
  }, {
    path: "/Admin/Edit/opportunities/:id?",
    component: _67a74bea,
    name: "Admin-Edit-opportunities-id___en"
  }, {
    path: "/Admin/Edit/page/:id?",
    component: _23e84919,
    name: "Admin-Edit-page-id___en"
  }, {
    path: "/Admin/Edit/partner/:id?",
    component: _6cdb5554,
    name: "Admin-Edit-partner-id___en"
  }, {
    path: "/Admin/Edit/pdf_template/:id?",
    component: _b7fef8fe,
    name: "Admin-Edit-pdf_template-id___en"
  }, {
    path: "/Admin/Edit/permission/:id?",
    component: _3a58fd59,
    name: "Admin-Edit-permission-id___en"
  }, {
    path: "/Admin/Edit/product-type/:id?",
    component: _1f584670,
    name: "Admin-Edit-product-type-id___en"
  }, {
    path: "/Admin/Edit/product/:id?",
    component: _696ebde6,
    name: "Admin-Edit-product-id___en"
  }, {
    path: "/Admin/Edit/projects/:id?",
    component: _93b4bee4,
    name: "Admin-Edit-projects-id___en"
  }, {
    path: "/Admin/Edit/quotes/:id?",
    component: _382279b1,
    name: "Admin-Edit-quotes-id___en"
  }, {
    path: "/Admin/Edit/report/:id?",
    component: _7fdacad8,
    name: "Admin-Edit-report-id___en"
  }, {
    path: "/Admin/Edit/return/:id?",
    component: _22e023d0,
    name: "Admin-Edit-return-id___en"
  }, {
    path: "/Admin/Edit/review/:id?",
    component: _763a20f0,
    name: "Admin-Edit-review-id___en"
  }, {
    path: "/Admin/Edit/reward/:id?",
    component: _d54caa0e,
    name: "Admin-Edit-reward-id___en"
  }, {
    path: "/Admin/Edit/role/:id?",
    component: _551cdf12,
    name: "Admin-Edit-role-id___en"
  }, {
    path: "/Admin/Edit/segment/:id?",
    component: _1e401b49,
    name: "Admin-Edit-segment-id___en"
  }, {
    path: "/Admin/Edit/shipment/:id?",
    component: _02e78b6e,
    name: "Admin-Edit-shipment-id___en"
  }, {
    path: "/Admin/Edit/shops/:id?",
    component: _45efe802,
    name: "Admin-Edit-shops-id___en"
  }, {
    path: "/Admin/Edit/state/:id?",
    component: _d1f82baa,
    name: "Admin-Edit-state-id___en"
  }, {
    path: "/Admin/Edit/tag/:id?",
    component: _3e15b3c2,
    name: "Admin-Edit-tag-id___en"
  }, {
    path: "/Admin/Edit/target/:id?",
    component: _07a3d252,
    name: "Admin-Edit-target-id___en"
  }, {
    path: "/Admin/Edit/tasks/:id?",
    component: _6f9fbfce,
    name: "Admin-Edit-tasks-id___en"
  }, {
    path: "/Admin/Edit/taxrate/:id?",
    component: _4ef5ce71,
    name: "Admin-Edit-taxrate-id___en"
  }, {
    path: "/Admin/Edit/taxrule/:id?",
    component: _41b123d5,
    name: "Admin-Edit-taxrule-id___en"
  }, {
    path: "/Admin/Edit/ticket/:id?",
    component: _303597bc,
    name: "Admin-Edit-ticket-id___en"
  }, {
    path: "/Admin/Edit/visit/:id?",
    component: _71f392b1,
    name: "Admin-Edit-visit-id___en"
  }, {
    path: "/Admin/Edit/warehouse/:id?",
    component: _2b735739,
    name: "Admin-Edit-warehouse-id___en"
  }, {
    path: "/Admin/Edit/zone/:id?",
    component: _1a030ec8,
    name: "Admin-Edit-zone-id___en"
  }, {
    path: "/Admin/Marketing/Email/:id?",
    component: _2f457988,
    name: "Admin-Marketing-Email-id___en"
  }, {
    path: "/",
    component: _bd46fd4a,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
