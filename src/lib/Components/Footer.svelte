<script>

    let t_terms_of_sevices = "Terms of Service"
    let t_privacy_policy = "Privacy policy"
    let t_company = "Company"
    let t_legal = "Legal"
    let t_website = "Website"
    let t_about_us = "About Us"
    let t_contact = "Contact"
    let t_our_products = "Our Products"
    let t_gramlok = "Gramlok"
    let t_viyavart = "Vidyavart"
    let t_copyrights = "2024 Lulugram pvt. All rights Reserved "


</script>


<footer class="">
    <div class="container">
        <div class="logos">
            <img class="app-logo" src="/logo2.jpg" alt="">
            <div class="social-media-logos">
                <img src="/instagram-fill.svg" alt="">
                <img src="/twitter-fill.svg" alt="">
                <img src="/twitch-fill.svg" alt="">
                <img width="24" src="/Rectangle 14.png" alt="">
            </div>
        </div>
    
        <div class="links">
            <div class="legal">
                <h2>{t_legal}</h2>
                <ul>
                    <li><a href="/tnc">{t_terms_of_sevices}</a> </li>
                    <li><a href="/privacy">{t_privacy_policy}</a> </li>
                </ul>
            </div>
    
            <div class="Company">
                <h2>{t_company}</h2>
                <ul>
                    <li><a href="https://www.lulugram.in">{t_website}</a></li>
                    <li><a href="/about">{t_about_us}</a></li>
                    <li><a href="/contact">{t_contact}</a></li>
                </ul>
            </div>
    
            <div class="Our Products">
                <h2>{t_our_products}</h2>
                <ul>
                    <li> <a href="https://www.gramlok.in">{t_gramlok}</a></li>
                    <li> <a href="https://www.vidyavart.in">{t_viyavart}</a></li>
                </ul>
            </div>
        </div>
    </div>

    <hr>
    <div class="copyright">
        <p>&copy; {t_copyrights}</p>
    </div>
</footer>


<style>
    footer{
        background-color: #2B2C31;
        padding: 20px ;
        padding-bottom:10px ;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    p{
        margin: 0;
    }
    .logos{
        width: fit-content;
    }

    .app-logo{
        width: 64px;
        border-radius: 50%;
        margin: 0 auto;
        display: block;
    }
    .social-media-logos{
        display: flex;
        gap: 20px;
        align-items: center;
        margin-top: 20px;
    }
    .links{
        display: flex;
        gap: 10px;
        justify-content: space-between;
        margin: 20px 0;
        width: 90%;
        max-width: 400px;
    }
    .links h2{
        font-size: 14px;
        text-align: center;
        color: white
    }
    .links ul li{
        font-size: 12px;
        text-align: center;
        color: #9E9E9E;
        margin-bottom: 10px;
    }
    li a{
        text-decoration: none;
        color: inherit;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    hr{
        width: 100%;
        margin: 0 auto;
        border: 0.5px solid #9e9e9e34;
        max-width: 75%;
    }
    .copyright{
        padding-top: 10px;
        font-size: 10px;
        color: #9E9E9E;
        text-align: center;
    }

    @media (min-width:1024px){
        footer{
            padding: 50px 10px;
            padding-bottom: 10px;
        }
        .container{
            flex-direction: row;
            justify-content:space-around;
        }
        .social-media-logos{
            margin-top: 0px;
        }
        .logos{
            display: flex;
            gap: 20px;
        }
        .app-logo{
            width: 90px;
        }
        .links{
            gap: 30px;
            max-width: 600px;
        }
        .links h2{
            font-size: 18px;
            text-align: left;
        }
        .links ul li{
            font-size: 16px;
            text-align: left;
        }
        .copyright{
            font-size: 14px;
        }
    }   

</style>