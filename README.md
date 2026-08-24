# 8 Meter Mafia — Girls & Women's Lacrosse Lifestyle Brand

Official website for **8 Meter Mafia**, the premier lifestyle apparel brand for girls and women who play lacrosse.

## Pages

- **`index.html`** — Homepage (hero, categories, products, brand story, reviews, social feed, email signup)
- **`shop.html`** — Full shop with sidebar filters, category sections, and product grid
- **`about.html`** — Brand story, mission, values, team, and community

## Structure

```
8-meter-mafia/
├── index.html
├── shop.html
├── about.html
├── css/
│   └── style.css      # All styles — responsive, dark/light adapted
├── js/
│   └── main.js        # Cart drawer, mobile nav, animations, form handling
└── images/            # Drop product/lifestyle images here
```

## Features

- Fully responsive (mobile-first)
- Sticky header with dropdown nav
- Mobile slide-in navigation drawer
- Cart drawer (ready for backend integration)
- Animated hero with lacrosse arc graphic
- Scrolling ticker / marquee
- Shop page with sidebar filters (category, size, color, price)
- Brand story section
- Review / social proof section
- Email signup with discount
- Instagram-style social grid
- Full-featured footer

## Customization

### Colors (in `css/style.css` `:root`)
```css
--navy:   #0f0f1a   /* Primary dark background */
--purple: #6d28d9   /* Accent purple */
--pink:   #ec4899   /* Hot pink — primary CTA color */
--gold:   #f59e0b   /* Gold accent */
```

### Adding Real Images
Replace the emoji placeholder `<div class="product-ph">` and `<div class="cat-ph">` elements with `<img>` tags pointing to your product/lifestyle photography.

### Connecting a Backend
The cart drawer and "Quick Add" / "Add to Cart" buttons are wired up in `js/main.js` and ready to integrate with Shopify, WooCommerce, or any headless commerce backend.

## Brand Identity

- **Name:** 8 Meter Mafia
- **Tagline:** Own the Arc. Rule the Game.
- **Target:** Girls and women who play lacrosse — youth through collegiate
- **Vibe:** Bold, sporty, feminine, community-driven

---

© 2025 8 Meter Mafia LLC
