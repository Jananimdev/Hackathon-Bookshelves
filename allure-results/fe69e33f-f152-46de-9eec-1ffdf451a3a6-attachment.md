# Test info

- Name: Invalid Email Submission
- Location: C:\Users\2398035\OneDrive - Cognizant\Desktop\Hackathon-Bookshelves\tests\ProductsSearch.spec.js:8:1

# Error details

```
Error: expect.toBeVisible: Error: strict mode violation: locator('#checkout-link') resolved to 2 elements:
    1) <button type="submit" name="checkout" id="checkout-link" data-event="Checkedout Order" class="action-button checkout-button">Checkout</button> aka getByRole('button', { name: 'Checkout' }).first()
    2) <button type="submit" name="checkout" id="checkout-link" data-event="Checkedout Order" class="action-button checkout-button">Checkout</button> aka locator('#subtotal').getByRole('button', { name: 'Checkout' })

Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#checkout-link')

    at ProductDetail.clickCheckOut (C:\Users\2398035\OneDrive - Cognizant\Desktop\Hackathon-Bookshelves\Pages\ProductDetail.js:15:28)
    at C:\Users\2398035\OneDrive - Cognizant\Desktop\Hackathon-Bookshelves\tests\ProductsSearch.spec.js:43:25
    at C:\Users\2398035\OneDrive - Cognizant\Desktop\Hackathon-Bookshelves\tests\ProductsSearch.spec.js:42:14
```

# Page snapshot

```yaml
- banner:
  - list:
    - listitem:
      - link "Help":
        - /url: /help
        - img
        - text: Help
    - listitem:
      - link "Track Order":
        - /url: /orders
        - img
        - text: Track Order
  - list:
    - listitem:
      - link "Become a Franchisee":
        - /url: https://forms.gle/CmpM3YQ25JkWXiNR7
      - text: New
    - listitem:
      - link "Find a Store":
        - /url: ../../store-cities?src=header
    - listitem:
      - link "Bulk Orders":
        - /url: ../../../institutional-business?src=header
    - listitem:
      - link "UL Services":
        - /url: ../../../ul-services?src=header
  - link:
    - /url: /
    - figure:
      - img
      - img
  - searchbox
  - searchbox "Search": Ottoman
  - button ""
  - list:
    - listitem:
      - link "Track Order":
        - /url: /orders?src=track-order
        - img
    - listitem:
      - img
    - listitem:
      - link "0":
        - /url: /wishlist?src=header
        - img
        - text: "0"
    - listitem:
      - link "0":
        - /url: /cart?src=header
        - img
        - text: "0"
  - navigation:
    - list:
      - listitem: New Collection
      - listitem: Deal Zone
      - listitem: Sofas & Recliners
      - listitem: Living
      - listitem: Bedroom & Mattresses
      - listitem: Dining
      - listitem: Storage Furniture
      - listitem: Study
      - listitem: Lighting & Decor
      - listitem: Interiors
      - listitem: Stores
- complementary
- heading "Search results for 'Ottoman'" [level=2]
- text: (338 Products) Filters - Search results for 'Ottoman' (338 Products)
- list:
  - listitem: Price
- checkbox "Exclude Out Of Stock"
- text: Exclude Out Of Stock Sort By Recommended
- list:
  - listitem:
    - link "Ottoman Design Morgen Ottoman in Calico Print":
      - /url: /products/morgen-ottoman?sku=FNSTOT51CN30017&src=room
      - img "Ottoman Design Morgen Ottoman in Calico Print"
    - text: 54% Off
    - link "Morgen Ottoman in Calico Print By Urban Ladder ₹17,599 ₹8,095 | EMI from ₹389":
      - /url: /products/morgen-ottoman?sku=FNSTOT51CN30017&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Collio Ottoman":
      - /url: /products/collio-ottoman?sku=FVSTOT13ML13773&src=room
      - img "Ottoman Design Collio Ottoman"
    - text: 40% Off
    - link "Collio Ottoman By Ikiriya ₹4,713 ₹2,827 | EMI from ₹138":
      - /url: /products/collio-ottoman?sku=FVSTOT13ML13773&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Iris Ottoman (Mossy Maroon)":
      - /url: /products/iris-ottoman?sku=FVSTOT62MR13748&src=room
      - img "Ottoman Design Iris Ottoman (Mossy Maroon)"
    - text: 41% Off
    - link "Iris Ottoman (Mossy Maroon) By Ikiriya ₹5,141 ₹3,033 | EMI from ₹148":
      - /url: /products/iris-ottoman?sku=FVSTOT62MR13748&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Iris Ottoman (Velvet Brown)":
      - /url: /products/iris-ottoman?sku=FVSTOT16VB13751&src=room
      - img "Ottoman Design Iris Ottoman (Velvet Brown)"
    - text: 40% Off
    - link "Iris Ottoman (Velvet Brown) By Ikiriya ₹4,713 ₹2,827 | EMI from ₹138":
      - /url: /products/iris-ottoman?sku=FVSTOT16VB13751&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Iris Ottoman (Jute Beige)":
      - /url: /products/iris-ottoman?sku=FVSTOT62JE13744&src=room
      - img "Ottoman Design Iris Ottoman (Jute Beige)"
    - text: 41% Off
    - link "Iris Ottoman (Jute Beige) By Ikiriya ₹5,141 ₹3,033 | EMI from ₹148":
      - /url: /products/iris-ottoman?sku=FVSTOT62JE13744&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Iris Ottoman (Mossy Grey)":
      - /url: /products/iris-ottoman?sku=FVSTOT62GY13747&src=room
      - img "Ottoman Design Iris Ottoman (Mossy Grey)"
    - text: 41% Off
    - link "Iris Ottoman (Mossy Grey) By Ikiriya ₹5,141 ₹3,033 | EMI from ₹148":
      - /url: /products/iris-ottoman?sku=FVSTOT62GY13747&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Iris Ottoman (Grey Velvet)":
      - /url: /products/iris-ottoman?sku=FVSTOT13GV13753&src=room
      - img "Ottoman Design Iris Ottoman (Grey Velvet)"
    - text: 40% Off
    - link "Iris Ottoman (Grey Velvet) By Ikiriya ₹4,713 ₹2,827 | EMI from ₹138":
      - /url: /products/iris-ottoman?sku=FVSTOT13GV13753&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Iris Ottoman (Leather Brown)":
      - /url: /products/iris-ottoman?sku=FVSTOT62BR13746&src=room
      - img "Ottoman Design Iris Ottoman (Leather Brown)"
    - text: 41% Off
    - link "Iris Ottoman (Leather Brown) By Ikiriya ₹5,141 ₹3,033 | EMI from ₹148":
      - /url: /products/iris-ottoman?sku=FVSTOT62BR13746&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Iris Ottoman (Jute Black)":
      - /url: /products/iris-ottoman?sku=FVSTOT62JK13745&src=room
      - img "Ottoman Design Iris Ottoman (Jute Black)"
    - text: 41% Off
    - link "Iris Ottoman (Jute Black) By Ikiriya ₹5,141 ₹3,033 | EMI from ₹148":
      - /url: /products/iris-ottoman?sku=FVSTOT62JK13745&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Chevron Ottoman (Mossy Grey)":
      - /url: /products/chevron-ottoman?sku=FVSTOT16GY13749&src=room
      - img "Ottoman Design Chevron Ottoman (Mossy Grey)"
    - text: 40% Off
    - link "Chevron Ottoman (Mossy Grey) By Ikiriya ₹4,713 ₹2,827 | EMI from ₹138":
      - /url: /products/chevron-ottoman?sku=FVSTOT16GY13749&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Chevron Ottoman (Mossy Maroon)":
      - /url: /products/chevron-ottoman?sku=FVSTOT16MR13750&src=room
      - img "Ottoman Design Chevron Ottoman (Mossy Maroon)"
    - text: 40% Off
    - link "Chevron Ottoman (Mossy Maroon) By Ikiriya ₹4,713 ₹2,827 | EMI from ₹138":
      - /url: /products/chevron-ottoman?sku=FVSTOT16MR13750&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Orlando Ottoman (Grey Velvet)":
      - /url: /products/orlando-ottoman?sku=FVSTOT13GV13742&src=room
      - img "Ottoman Design Orlando Ottoman (Grey Velvet)"
    - text: 41% Off
    - link "Orlando Ottoman (Grey Velvet) By Ikiriya ₹8,570 ₹5,056 | EMI from ₹243":
      - /url: /products/orlando-ottoman?sku=FVSTOT13GV13742&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Dallas Ottoman (Grey Velvet)":
      - /url: /products/dallas-ottoman?sku=FVSTOT13GV13743&src=room
      - img "Ottoman Design Dallas Ottoman (Grey Velvet)"
    - text: 41% Off
    - link "Dallas Ottoman (Grey Velvet) By Ikiriya ₹8,570 ₹5,056 | EMI from ₹243":
      - /url: /products/dallas-ottoman?sku=FVSTOT13GV13743&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Caleb Solid Wood Ottoman":
      - /url: /products/caleb-solid-wood-ottoman-jjxxot62ml10399?sku=JJSTOT62ML10399&src=room
      - img "Ottoman Design Caleb Solid Wood Ottoman"
    - text: 10% Off
    - link "Caleb Solid Wood Ottoman By Globally Indian ₹2,992 ₹2,692 | EMI from ₹131":
      - /url: /products/caleb-solid-wood-ottoman-jjxxot62ml10399?sku=JJSTOT62ML10399&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Milo Solid Wood Ottoman":
      - /url: /products/milo-solid-wood-ottoman-jjxxot62ml10385?sku=JJSTOT62ML10385&src=room
      - img "Ottoman Design Milo Solid Wood Ottoman"
    - text: 26% Off
    - link "Milo Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,691 | EMI from ₹131":
      - /url: /products/milo-solid-wood-ottoman-jjxxot62ml10385?sku=JJSTOT62ML10385&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Benjamin Solid Wood Ottoman":
      - /url: /products/benjamin-solid-wood-ottoman-jjxxot62ml10401?sku=JJSTOT62ML10401&src=room
      - img "Ottoman Design Benjamin Solid Wood Ottoman"
    - text: 26% Off
    - link "Benjamin Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,691 | EMI from ₹131":
      - /url: /products/benjamin-solid-wood-ottoman-jjxxot62ml10401?sku=JJSTOT62ML10401&src=room
    - text: 
  - listitem:
    - link "Ottoman Design William Solid Wood Ottoman":
      - /url: /products/william-solid-wood-ottoman-jjxxot62ml10405?sku=JJSTOT62ML10405&src=room
      - img "Ottoman Design William Solid Wood Ottoman"
    - text: 26% Off
    - link "William Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,691 | EMI from ₹131":
      - /url: /products/william-solid-wood-ottoman-jjxxot62ml10405?sku=JJSTOT62ML10405&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Asher Solid Wood Ottoman":
      - /url: /products/asher-solid-wood-ottoman-jjxxot62ml10387?sku=JJSTOT62ML10387&src=room
      - img "Ottoman Design Asher Solid Wood Ottoman"
    - text: 30% Off
    - link "Asher Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,545 | EMI from ₹124":
      - /url: /products/asher-solid-wood-ottoman-jjxxot62ml10387?sku=JJSTOT62ML10387&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Finn Solid Wood Ottoman":
      - /url: /products/finn-solid-wood-ottoman-jjxxot62ml10403?sku=JJSTOT62ML10403&src=room
      - img "Ottoman Design Finn Solid Wood Ottoman"
    - text: 30% Off
    - link "Finn Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,545 | EMI from ₹124":
      - /url: /products/finn-solid-wood-ottoman-jjxxot62ml10403?sku=JJSTOT62ML10403&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Caden Solid Wood Ottoman (Grey)":
      - /url: /products/caden-solid-wood-ottoman-jjxxot62gy10458?sku=JJSTOT62GY10458&src=room
      - img "Ottoman Design Caden Solid Wood Ottoman (Grey)"
    - text: 30% Off
    - link "Caden Solid Wood Ottoman (Grey) By Globally Indian ₹5,818 ₹4,072 | EMI from ₹198":
      - /url: /products/caden-solid-wood-ottoman-jjxxot62gy10458?sku=JJSTOT62GY10458&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Lyra Solid Wood Ottoman (Pink)":
      - /url: /products/lyra-solid-wood-ottoman-jjxxot62pk10456?sku=JJSTOT62PK10456&src=room
      - img "Ottoman Design Lyra Solid Wood Ottoman (Pink)"
    - text: 10% Off
    - link "Lyra Solid Wood Ottoman (Pink) By Globally Indian ₹4,787 ₹4,308 | EMI from ₹209":
      - /url: /products/lyra-solid-wood-ottoman-jjxxot62pk10456?sku=JJSTOT62PK10456&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Hunter Solid Wood Ottoman (Brown)":
      - /url: /products/hunter-solid-wood-ottoman-jjxxot62br10455?sku=JJSTOT62BR10455&src=room
      - img "Ottoman Design Hunter Solid Wood Ottoman (Brown)"
    - text: 30% Off
    - link "Hunter Solid Wood Ottoman (Brown) By Globally Indian ₹5,818 ₹4,072 | EMI from ₹198":
      - /url: /products/hunter-solid-wood-ottoman-jjxxot62br10455?sku=JJSTOT62BR10455&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Atlas Solid Wood Ottoman (Red)":
      - /url: /products/atlas-solid-wood-ottoman-jjxxot62rd10460?sku=JJSTOT62RD10460&src=room
      - img "Ottoman Design Atlas Solid Wood Ottoman (Red)"
    - text: 30% Off
    - link "Atlas Solid Wood Ottoman (Red) By Globally Indian ₹5,818 ₹4,072 | EMI from ₹198":
      - /url: /products/atlas-solid-wood-ottoman-jjxxot62rd10460?sku=JJSTOT62RD10460&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Calliope Solid Wood Ottoman (Brown)":
      - /url: /products/calliope-solid-wood-ottoman-jjxxot62br10459?sku=JJSTOT62BR10459&src=room
      - img "Ottoman Design Calliope Solid Wood Ottoman (Brown)"
    - text: 30% Off
    - link "Calliope Solid Wood Ottoman (Brown) By Globally Indian ₹5,818 ₹4,072 | EMI from ₹198":
      - /url: /products/calliope-solid-wood-ottoman-jjxxot62br10459?sku=JJSTOT62BR10459&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Dominic Solid Wood Ottoman (Yellow)":
      - /url: /products/dominic-solid-wood-ottoman-jjxxot62yl10453?sku=JJSTOT62YL10453&src=room
      - img "Ottoman Design Dominic Solid Wood Ottoman (Yellow)"
    - text: 30% Off
    - link "Dominic Solid Wood Ottoman (Yellow) By Globally Indian ₹5,818 ₹4,072 | EMI from ₹198":
      - /url: /products/dominic-solid-wood-ottoman-jjxxot62yl10453?sku=JJSTOT62YL10453&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Ophelia Solid Wood Ottoman":
      - /url: /products/ophelia-solid-wood-ottoman-jjxxot62ml10396?sku=JJSTOT62ML10396&src=room
      - img "Ottoman Design Ophelia Solid Wood Ottoman"
    - text: 26% Off
    - link "Ophelia Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,691 | EMI from ₹131":
      - /url: /products/ophelia-solid-wood-ottoman-jjxxot62ml10396?sku=JJSTOT62ML10396&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Evangeline Solid Wood Ottoman":
      - /url: /products/evangeline-solid-wood-ottoman-jjxxot62ml10394?sku=JJSTOT62ML10394&src=room
      - img "Ottoman Design Evangeline Solid Wood Ottoman"
    - text: 30% Off
    - link "Evangeline Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,545 | EMI from ₹124":
      - /url: /products/evangeline-solid-wood-ottoman-jjxxot62ml10394?sku=JJSTOT62ML10394&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Emmett Solid Wood Ottoman":
      - /url: /products/emmett-solid-wood-ottoman-jjxxot62ml10407?sku=JJSTOT62ML10407&src=room
      - img "Ottoman Design Emmett Solid Wood Ottoman"
    - text: 26% Off
    - link "Emmett Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,691 | EMI from ₹131":
      - /url: /products/emmett-solid-wood-ottoman-jjxxot62ml10407?sku=JJSTOT62ML10407&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Oliver Solid Wood Ottoman":
      - /url: /products/oliver-solid-wood-ottoman-jjxxot62ml10395?sku=JJSTOT62ML10395&src=room
      - img "Ottoman Design Oliver Solid Wood Ottoman"
    - text: 26% Off
    - link "Oliver Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,691 | EMI from ₹131":
      - /url: /products/oliver-solid-wood-ottoman-jjxxot62ml10395?sku=JJSTOT62ML10395&src=room
    - text: 
  - listitem:
    - link "Ottoman Design Xavier Solid Wood Ottoman":
      - /url: /products/xavier-solid-wood-ottoman-jjxxot62ml10393?sku=JJSTOT62ML10393&src=room
      - img "Ottoman Design Xavier Solid Wood Ottoman"
    - text: 30% Off
    - link "Xavier Solid Wood Ottoman By Globally Indian ₹3,637 ₹2,545 | EMI from ₹124":
      - /url: /products/xavier-solid-wood-ottoman-jjxxot62ml10393?sku=JJSTOT62ML10393&src=room
    - text: 
- text: + +
- button "Compare"
- text: Browse Popular Categories
- list:
  - listitem:
    - link "Living Living 5082+ Options starting from ₹466":
      - /url: /living-room-furniture?src=g_footer_interlink
      - img "Living"
      - text: Living 5082+ Options starting from ₹466
  - listitem:
    - link "Dining Dining 1311+ Options starting from ₹384":
      - /url: /dining-furniture?src=g_footer_interlink
      - img "Dining"
      - text: Dining 1311+ Options starting from ₹384
  - listitem:
    - link "Bedroom & Mattresses Bedroom & Mattresses 8314+ Options starting from ₹594":
      - /url: /bedroom-furniture?src=g_footer_interlink
      - img "Bedroom & Mattresses"
      - text: Bedroom & Mattresses 8314+ Options starting from ₹594
  - listitem:
    - link "Storage Furniture Storage Furniture 1497+ Options starting from ₹466":
      - /url: /storage?src=g_footer_interlink
      - img "Storage Furniture"
      - text: Storage Furniture 1497+ Options starting from ₹466
  - listitem:
    - link "Lighting & Decor Lighting & Decor 5897+ Options starting from ₹79":
      - /url: /home-decor?src=g_footer_interlink
      - img "Lighting & Decor"
      - text: Lighting & Decor 5897+ Options starting from ₹79
  - listitem:
    - link "Study Study 924+ Options starting from ₹466":
      - /url: /study?src=g_footer_interlink
      - img "Study"
      - text: Study 924+ Options starting from ₹466
  - listitem:
    - link "Deal Zone Deal Zone 1782+ Options starting from ₹598":
      - /url: /sale?src=g_footer_interlink
      - img "Deal Zone"
      - text: Deal Zone 1782+ Options starting from ₹598
  - listitem:
    - link "New Collection New Collection 2096+ Options starting from ₹53":
      - /url: /collections-new?src=g_footer_interlink
      - img "New Collection"
      - text: New Collection 2096+ Options starting from ₹53
  - listitem:
    - link "Stores Stores 1137+ Options starting from ₹53":
      - /url: /furniture-stores?src=g_footer_interlink
      - img "Stores"
      - text: Stores 1137+ Options starting from ₹53
  - listitem:
    - link "Sofas & Recliners Sofas & Recliners 2822+ Options starting from ₹472":
      - /url: /sofas-and-recliners?src=g_footer_interlink
      - img "Sofas & Recliners"
      - text: Sofas & Recliners 2822+ Options starting from ₹472
  - listitem:
    - link "Living Interiors 5082+ Options starting from ₹466":
      - /url: /interiors?src=g_footer_interlink
      - img "Living"
      - text: Interiors 5082+ Options starting from ₹466
- contentinfo:
  - text: "The Company:"
  - list:
    - listitem:
      - link "About Us":
        - /url: /about-urban-ladder?src=g_footer
    - listitem:
      - link "Help":
        - /url: /help?src=g_footer
    - listitem:
      - link "Blog":
        - /url: /blog?src=g_footer
    - listitem:
      - link "Inside UL":
        - /url: /inside-ul?src=g_footer
  - list:
    - listitem:
      - link "Careers":
        - /url: /careers?src=g_footer
    - listitem:
      - link "Press":
        - /url: /press-coverage?src=g_footer
    - listitem:
      - link "Team":
        - /url: https://www.linkedin.com/company/2482371/life/?src=g_footer
    - listitem:
      - link "Privacy Policy":
        - /url: /privacy-policy?src=g_footer
  - text: "More Information:"
  - list:
    - listitem:
      - link "Fees and Payment":
        - /url: /security-payments?src=g_footer
    - listitem:
      - link "Shipping & Delivery":
        - /url: /shipping-delivery?src=g_footer
    - listitem:
      - link "Terms and Conditions":
        - /url: /terms-of-use?src=g_footer
    - listitem:
      - link "Warranty, Return and Refund":
        - /url: /terms-of-offer-for-sale?src=g_footer
  - list:
    - listitem:
      - link "Contact Us":
        - /url: /help/contact-us?src=g_footer
    - listitem:
      - link "Visit Us":
        - /url: /furniture-stores?src=g_footer
    - listitem:
      - link "Buy In Bulk":
        - /url: /buy-in-bulk?src=g_footer
  - text: Explore More
  - list:
    - listitem:
      - link "Refer & Earn":
        - /url: /refer_and_earn?src=g_footer
  - text: Address
  - list:
    - listitem: Reliance Retail Limited, 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai- 400 002, Maharashtra, India
    - listitem: "CIN: U01100MH1999PLC120563"
  - text: "Connect With Us:"
  - list:
    - listitem:
      - link " +91 80698 07777":
        - /url: tel:+918069807777
    - listitem:
      - link "":
        - /url: mailto:hello@urbanladder.com
    - listitem:
      - link "":
        - /url: https://facebook.com/urbanladder
    - listitem:
      - link "":
        - /url: https://twitter.com/UrbanLadder
    - listitem:
      - link "":
        - /url: https://www.pinterest.com/urbanladder/
    - listitem:
      - link "":
        - /url: https://youtube.com/user/urbanladder
    - listitem:
      - link "":
        - /url: https://instagram.com/urbanladder/
    - listitem:
      - link "":
        - /url: https://in.linkedin.com/company/urban-ladder
  - text: "Download App:"
  - link "Download Urban Ladder App from Apple Store":
    - /url: https://itunes.apple.com/us/app/urban-ladder/id959886087
    - img "Download Urban Ladder App from Apple Store"
  - link "Download Urban Ladder App from Playstore":
    - /url: https://play.google.com/store/apps/details?id=com.urbanladder.catalog
    - img "Download Urban Ladder App from Playstore"
  - text: "Popular Furniture Categories:"
  - list:
    - listitem:
      - link "Bed":
        - /url: /bed
    - text: ","
    - listitem:
      - link "Beds By Design":
        - /url: /all-beds
    - text: ","
    - listitem:
      - link "Sofa Set":
        - /url: /sofa-set
    - text: ","
    - listitem:
      - link "Wooden Sofa":
        - /url: /wooden-sofas
    - text: ","
    - listitem:
      - link "Sofas By Design":
        - /url: /sofa
    - text: ","
    - listitem:
      - link "Sofa Cum Bed":
        - /url: /sofa-cum-bed
    - text: ","
    - listitem:
      - link "Double Bed":
        - /url: /double-beds
    - text: ","
    - listitem:
      - link "Single Bed":
        - /url: /single-beds
    - text: ","
    - listitem:
      - link "Queen Size Bed":
        - /url: /queen-size-bed
    - text: ","
    - listitem:
      - link "King Size Bed":
        - /url: /king-size-bed
    - text: ","
    - listitem:
      - link "Chair":
        - /url: /chair
    - text: ","
    - listitem:
      - link "Wooden Table":
        - /url: /tables
    - text: ","
    - listitem:
      - link "Study Table":
        - /url: /study-table
    - text: ","
    - listitem:
      - link "Study Chair":
        - /url: /study-chair
    - text: ","
    - listitem:
      - link "Wardrobe":
        - /url: /wardrobes
    - text: ","
    - listitem:
      - link "Chest of Drawers":
        - /url: /chest-of-drawers
    - text: ","
    - listitem:
      - link "Futon":
        - /url: /futon
    - text: ","
    - listitem:
      - link "Loveseat":
        - /url: /loveseats
    - text: ","
    - listitem:
      - link "Dining Table Set":
        - /url: /dining-table-set
    - text: ","
    - listitem:
      - link "Dining Chair":
        - /url: /dining-chairs
    - text: ","
    - listitem:
      - link "Bookshelves":
        - /url: /bookshelf
    - text: ","
    - listitem:
      - link "Shoe Rack":
        - /url: /shoe-rack
    - text: ","
    - listitem:
      - link "TV Units":
        - /url: /tv-units
    - text: ","
    - listitem:
      - link "Recliners":
        - /url: /recliners
    - text: ","
    - listitem:
      - link "Furniture":
        - /url: /furniture
    - text: ","
    - listitem:
      - link "Office Furniture":
        - /url: /office-furniture
    - text: ","
    - listitem:
      - link "Office Table":
        - /url: /office-tables
    - text: ","
    - listitem:
      - link "Office Chair":
        - /url: /office-chairs
    - text: ","
    - listitem:
      - link "2 Seater Sofa":
        - /url: /two-seater-sofas
    - text: ","
    - listitem:
      - link "TV Cupboard":
        - /url: /tv-cupboard
    - text: ","
    - listitem:
      - link "TV Showcase":
        - /url: /tv-showcase
    - text: ","
    - listitem:
      - link "TV Stand":
        - /url: /tv-stand
    - text: ","
    - listitem:
      - link "Center Table":
        - /url: /center-tables
  - text: "Shop Furniture By Room:"
  - list:
    - listitem:
      - link "Living Room Furniture":
        - /url: /living-room-furniture
    - text: ","
    - listitem:
      - link "Bedroom Furniture":
        - /url: /bedroom-furniture
    - text: ","
    - listitem:
      - link "Dining Room Furniture":
        - /url: /dining-furniture
    - text: ","
    - listitem:
      - link "Study Room Furniture":
        - /url: /study
    - text: ","
    - listitem:
      - link "Bar Furniture":
        - /url: /bar-furniture
    - text: ","
    - listitem:
      - link "Balcony Furniture":
        - /url: /balcony
  - text: "Popular Decor Categories:"
  - list:
    - listitem:
      - link "Home Decor":
        - /url: /home-decor
    - text: ","
    - listitem:
      - link "Carpets":
        - /url: /carpet
    - text: ","
    - listitem:
      - link "Mirrors":
        - /url: /mirrors
    - text: ","
    - listitem:
      - link "Study Lamps":
        - /url: /study-lamps
    - text: ","
    - listitem:
      - link "Table Lamps":
        - /url: /table-lamps
    - text: ","
    - listitem:
      - link "Bed Sheets":
        - /url: /bedsheets
    - text: ","
    - listitem:
      - link "Floor Lamps":
        - /url: /floor-lamps
    - text: ","
    - listitem:
      - link "Wall Lights":
        - /url: /wall-lights
    - text: ","
    - listitem:
      - link "Lighting":
        - /url: /lighting
    - text: ","
    - listitem:
      - link "Ceiling Lights":
        - /url: /ceiling-lights
    - text: ","
    - listitem:
      - link "Quilt":
        - /url: /quilt
    - text: ","
    - listitem:
      - link "Wall Decor":
        - /url: /wall-decors
    - text: ","
    - listitem:
      - link "Wall Mirror":
        - /url: /wall-mirrors
    - text: ","
    - listitem:
      - link "Table Decor":
        - /url: /table-furnishing
    - text: ","
    - listitem:
      - link "Table Cover":
        - /url: /table-covers
    - text: ","
    - listitem:
      - link "Table Napkin":
        - /url: /table-napkin
    - text: ","
    - listitem:
      - link "Table Mat":
        - /url: /table-mat
    - text: ","
    - listitem:
      - link "Cushion Cover":
        - /url: /cushion-cover
    - text: ","
    - listitem:
      - link "Table Runners":
        - /url: /table-runners
    - text: ","
    - listitem:
      - link "Home Furnishing":
        - /url: /home-furnishing
    - text: ","
    - listitem:
      - link "Wall Art":
        - /url: /wall-art
    - text: ","
    - listitem:
      - link "Showpiece":
        - /url: /showpieces
    - text: ","
    - listitem:
      - link "Artificial Plants":
        - /url: /artificial-plants
    - text: ","
    - listitem:
      - link "Photo Frame":
        - /url: /photo-frames
    - text: ","
    - listitem:
      - link "Candle Stand":
        - /url: /candle-stand
    - text: ","
    - listitem:
      - link "Clocks":
        - /url: /clocks
    - text: ","
    - listitem:
      - link "Wall Clocks":
        - /url: /wall-clocks
    - text: ","
    - listitem:
      - link "Festive Lights":
        - /url: /festive-lights
    - text: ","
    - listitem:
      - link "Candles":
        - /url: /candles
    - text: ","
    - listitem:
      - link "Bath Mat":
        - /url: /bath-mats
    - text: ","
    - listitem:
      - link "Vases":
        - /url: /vases
    - text: ","
    - listitem:
      - link "Flower Vase":
        - /url: /flower-vase
    - text: ","
    - listitem:
      - link "Bathroom Accessories":
        - /url: /bathroom-accessories
    - text: ","
    - listitem:
      - link "Bathroom Mirrors":
        - /url: /bathroom-mirrors
  - text: "Popular Mattress Categories:"
  - list:
    - listitem:
      - link "Mattresses":
        - /url: /mattresses
    - text: ","
    - listitem:
      - link "Single Bed Mattresses":
        - /url: " /single-bed-mattress"
    - text: ","
    - listitem:
      - link "Double Bed Mattresses":
        - /url: /double-bed-mattress
    - text: ","
    - listitem:
      - link "King Size Mattresses":
        - /url: /king-size-mattress
    - text: ","
    - listitem:
      - link "Queen Size Mattresses":
        - /url: /queen-size-mattress
    - text: ","
    - listitem:
      - link "Foam Mattress":
        - /url: /foam-mattress
    - text: ","
    - listitem:
      - link "Coir Mattress":
        - /url: /coir-mattress
    - text: ","
    - listitem:
      - link "Latex Mattress":
        - /url: /latex-mattress
    - text: ","
    - listitem:
      - link "Spring Mattress":
        - /url: /spring-mattress
    - text: ","
    - listitem:
      - link "Orthopaedic Mattress":
        - /url: /orthopaedic-mattress
  - text: "Popular Tableware Categories:"
  - list:
    - listitem:
      - link "Shot Glass":
        - /url: /shot-glass
    - text: ","
    - listitem:
      - link "Dinner Plates":
        - /url: /dinner-plates
    - text: ","
    - listitem:
      - link "Baking Tray":
        - /url: /baking-tray
    - text: ","
    - listitem:
      - link "Forks":
        - /url: /fork
    - text: ","
    - listitem:
      - link "Dinner Set":
        - /url: /dinner-set
    - text: ","
    - listitem:
      - link "Tumbler":
        - /url: /tumbler
    - text: ","
    - listitem:
      - link "Drinking Glass":
        - /url: /drinking-glass
    - text: ","
    - listitem:
      - link "Cutlery Holder":
        - /url: /cutlery-holder
    - text: ","
    - listitem:
      - link "Tissue Holder":
        - /url: /tissue-holder
    - text: ","
    - listitem:
      - link "Bottle Opener":
        - /url: /bottle-opener
    - text: ","
    - listitem:
      - link "Spoons":
        - /url: /spoons
    - text: ","
    - listitem:
      - link "Whiskey Glass":
        - /url: /whiskey-glass
    - text: ","
    - listitem:
      - link "Kitchen Organizers":
        - /url: /kitchen-organizers
    - text: ","
    - listitem:
      - link "Hot Pot":
        - /url: /hot-pot
    - text: ","
    - listitem:
      - link "Chef's Cap":
        - /url: /chefs-cap
    - text: ","
    - listitem:
      - link "Glass Jars":
        - /url: /glass-jars
    - text: ","
    - listitem:
      - link "Kitchen Gloves":
        - /url: /kitchen-gloves
    - text: ","
    - listitem:
      - link "Kitchen Storage Containers":
        - /url: /kitchen-storage-containers
    - text: ","
    - listitem:
      - link "Bar Tools":
        - /url: /bar-tools
    - text: ","
    - listitem:
      - link "Masala Box":
        - /url: /masala-box
    - text: ","
    - listitem:
      - link "Glass Bottles":
        - /url: /glass-bottles
    - text: ","
    - listitem:
      - link "Coasters":
        - /url: /coasters
    - text: ","
    - listitem:
      - link "Cutlery Set":
        - /url: /cutlery-set
    - text: ","
    - listitem:
      - link "Knives Set":
        - /url: /knives-set
    - text: ","
    - listitem:
      - link "Oven Gloves":
        - /url: /oven-gloves
    - text: ","
    - listitem:
      - link "Aprons":
        - /url: /aprons
    - text: ","
    - listitem:
      - link "Cake Stand":
        - /url: /cake-stand
    - text: ","
    - listitem:
      - link "Fruit Basket":
        - /url: /fruit-basket
    - text: ","
    - listitem:
      - link "Spice Box":
        - /url: /spice-box
    - text: ","
    - listitem:
      - link "Beer Glass":
        - /url: /beer-glass
    - text: ","
    - listitem:
      - link "Bowls":
        - /url: /bowls
    - text: ","
    - listitem:
      - link "Oil Dispenser":
        - /url: /oil-dispenser
    - text: ","
    - listitem:
      - link "Housewarming Gifts":
        - /url: /housewarming-gifts
  - text: "Delivering in:"
  - list:
    - listitem: Aanamalai
    - text: ","
    - listitem: Ahmedabad
    - text: ","
    - listitem: Ajmer
    - text: ","
    - listitem: Alappuzha
    - text: ","
    - listitem: Aler
    - text: ","
    - listitem: Alibaug
    - text: ","
    - listitem: Aligarh
    - text: ","
    - listitem: Alleppey
    - text: ","
    - listitem: Alwar
    - text: ","
    - listitem: Alwaye
    - text: ","
    - listitem: Amaravathi
    - text: ","
    - listitem: Ambala
    - text: ","
    - listitem: Ambarnath
    - text: ","
    - listitem: Amdapur
    - text: ","
    - listitem: Amtala
    - text: ","
    - listitem: Anakapalle
    - text: ","
    - listitem: Anikorai
    - text: ","
    - listitem: Arakkonam
    - text: ","
    - listitem: Arnala
    - text: ","
    - listitem: Arutla
    - text: ","
    - listitem: Asansol
  - link "... More":
    - /url: /locations?src=footer
  - text: "We Accept:"
  - list:
    - listitem:
      - img "Visa color"
      - img "Mastercard color"
      - img "Maestro color"
      - img "Amex color"
      - img "Rupay color"
      - img "Bhim upi color"
  - text: © 2012-2025 Urban Ladder
- img
- iframe
- img "Online Furniture"
- link "Close":
  - /url: javascript:void(0);
- text: SIGN UP FOR SALE UPDATES Get ideas, inspirations & offers in your inbox Be the first to know.
- textbox "Email Address*"
- link "Show Password":
  - /url: javascript:void(0);
- textbox "Password*"
- button "Sign Up"
- text: Have an account?
- link "Log-in":
  - /url: javascript:void(0);
- text: Social sign-in
- link " Connect ":
  - /url: /auth/facebook
- link " Connect ":
  - /url: /auth/google_oauth2
- paragraph:
  - text: By continuing, you agree to our
  - link "Terms of Service":
    - /url: https://www.urbanladder.com/terms-of-use
  - text: and
  - link "Privacy & Legal Policy":
    - /url: https://www.urbanladder.com/privacy-policy
- iframe
```

# Test source

```ts
   1 | const {test,expect}=require('@playwright/test');
   2 | class ProductDetail {
   3 |   constructor(page) {
   4 |     this.page = page;
   5 |   }
   6 |
   7 |   async clickAddToCart() {
   8 |     const addToCart = this.page.locator("#add-to-cart-button");
   9 |     await expect(addToCart).toBeVisible()
  10 |     await addToCart.click();
  11 |   }
  12 |
  13 |   async clickCheckOut() {
  14 |     const checkOut = this.page.locator("#checkout-link");
> 15 |     await expect(checkOut).toBeVisible()
     |                            ^ Error: expect.toBeVisible: Error: strict mode violation: locator('#checkout-link') resolved to 2 elements:
  16 |     await checkOut.first().click();
  17 |   }
  18 |
  19 |   async enterEmail(emailInp) {
  20 |     const email = this.page.locator("#order_email");
  21 |     await expect(email).toBeEditable()
  22 |     await email.fill(emailInp);
  23 |   }
  24 |
  25 |   async getEmailError() {
  26 |     const emailError = this.page.locator("//label[@for='order_email']");
  27 |     await emailError.waitFor();
  28 |     const errorMessage = await emailError.textContent();
  29 |     console.log(errorMessage);
  30 |   }
  31 | }
  32 | module.exports = ProductDetail;
```