<template>
  <v-container grid-list-md class="post">
    <v-layout row wrap >
      <v-flex xs12 mt-5>
              <div class="title">Copyright and Disclaimer</div><br><br>
              <p>
                This website and its content is copyright of fashionbook © 2019. All rights reserved.
Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following:</p>
<p><ul><li>You may print or download to a local hard disk extracts for your personal and non-commercial use only
you may copy the content to individual third parties for their personal use, but only if you acknowledge the website as the source of the material</li>
<li>You may not, except with our express written permission, distribute or commercially exploit the content. Nor may you transmit it or store it in any other website or other form of electronic retrieval system.</li>
<li>By signing up or posting to the site, you agree that your product can be used for adverts.</li>
<li>Because we serve as the middle man between the merchant and the buyer you must not commit and form of fraud to any customer or merchant. If you violate this rule, your account will be deactivated and legal actions will be filed on you.</li></ul></p>
<p><b>Disclaimer :</b><br>
Please note that fashionbook connect buyers and sellers only. We don’t sell this products. Merchants or sellers use our platform to sell their product. Be smart. Fashionbook will not take responsibilities for fraudulent act. Be wise.
              </p>
              
            </v-flex>
    </v-layout>
    
  </v-container>
</template>

<style lang="scss" scoped>
h2 {
  font-size: 30px;
  font-weight: 400;
}
.title {
  font-size: 50px !important;
  font-weight: 200;
  text-align: center;
}
.post {
  width: 600px;
  @media (max-width: 420px) {
    max-width: 100%;
  }
}
form {
  background-color: white;
  border: 1px solid #adadad;
  border-radius: 10px;
  margin: 0 auto;
  padding: 50px;
  @media (max-width: 420px) {
    margin-top: 20px !important;
    padding: 30px 20px;
  }
  .subtitle {
    font-size: 14px;
    font-weight: 700;
  }
  .errorClass {
    color: red;
    font-family: 'Times New Roman', Times, serif;
    font-style: italic;
    text-align: center;
  }

  .edit-profile a {
    text-decoration: none;
    color: darkcyan;
    float: right;
  }

  .edit-profile a:hover {
    color:cadetblue
  }
}
</style>
