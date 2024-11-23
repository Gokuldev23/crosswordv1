<script>
    import { goto } from '$app/navigation';

    let t_appName = "Pro vocab Cross-word"
    let t_mainTagLine = "Your Ultimate Prep Tool for GMAT, SAT, and GRE!"
    let t_subTagLine = "Strengthen your vocabulary, enhance problem-solving skills, and get exam-ready with daily puzzles crafted for future achievers."
    let t_featureOne = "Daily Challenges"
    let t_feature_one_desc = "Daily Puzzles, Daily Challenges – Keep Your Brain Sharp!"
    let t_featureTWo = "Hints & Tips"
    let t_feature_two_desc = "Stuck sometimes? Use Hints and tips!"
    let t_ctaBtnText = "play now"

    const naviagtePuzzzlePage = () => {
        goto('/puzzleChoosePage')
    }

</script>


<main class="hero">
    <h1 class="app-name">{t_appName}</h1>
    <p class="tagline">{t_mainTagLine}</p>
    <p class="tagline-expanded">
        {t_subTagLine}
    </p>

    <button on:click={naviagtePuzzzlePage} class="cta-btn">
        <p>{t_ctaBtnText}</p>
        <img src="/downArrow.webp" alt="">
    </button>

    <div class="hero-img-container">
        <div class="feature-1">
            <p>{t_featureOne}</p>
            <img class="feature-img " src="./feature1.png" alt="">
            <p>{t_feature_one_desc}</p>
        </div>
        <div class="hero-img">
            <img class="" src="/cross-word-landing-bg.png" alt="">
        </div>
        <div class="feature-2">
            <p>{t_featureTWo}</p>
            <img class="feature-img " src="./feature2.png" alt="">
            <p>{t_feature_two_desc}</p>
        </div>
    </div>

   

    <div class="features">
        <div class="feature-1">
            <p>{t_featureOne}</p>
            <img class="feature-img " src="./feature1.png" alt="">
        </div>
        <div class="feature-2">
            <p>{t_featureTWo}</p>
            <img class="feature-img " src="./feature2.png" alt="">
        </div>
    </div>
</main>


<style>
    .hero{
        padding: 20px 10px;
        padding-bottom: 100px;
    }
    .app-name{
        font-family: 'Bungee Shade',sans-serif;
        text-align: center;
    }
    .tagline{
        font-weight: bold;
    }
    .tagline-expanded{
        font-size: 14px;
        max-width: 350px;
        margin: 0 auto;
    }
    .tagline,.tagline-expanded{
        text-align: center; 
        color: white;
    }
    .hero-img{
        width: 90%;
        display: block;
        margin: 0 auto;
        padding: 20px;
        background-color: white;
        margin-top: 40px;
        border-radius: 20px;
        box-shadow: -10px 10px 10px 2px black;
    }

    p{
        margin: 0;
    }

    .cta-btn{
        display: flex;
        align-items: center;
        gap: 10px;
        text-transform: uppercase;
        background:white;
        border-radius: 40px;
        padding: 6px 12px;
        margin: 0 auto;
        margin-top: 30px;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .features{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 40px;
    }
    .feature-1 p,.feature-2 p{
        text-align: center;
        color: #467E51;
        font-weight: 500;
    }
    .feature-img{
        display: block;
        max-width: 100px;
        margin: 20px auto;
        max-height: 100%;
        object-fit: contain; 
    }

    .hero-img-container .feature-1,.hero-img-container .feature-2{
        display: none;
    }

    @media (min-width:576px){
        .hero-img{
            max-width: 600px;
        }
        .tagline{
            font-size: 24px;
        }
        .tagline-expanded{
            font-size: 18px;
            max-width: 70%;
        }
       
    }

    @media (min-width:1024px){
        .hero-img-container{
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 1440px;
            margin: 0 auto;
        }
        .hero-img-container .feature-1,.hero-img-container .feature-2{
            display: block;
            width: 300px;
        }
        .features{
            display: none;
        }
        .app-name{
            font-size: 40px;
            margin-top:0 ;
        }
        .tagline{
            font-size: 28px;
        }
        .tagline-expanded{
            font-size: 20px;
            max-width: 50%;
            margin-top: 20px;
        }
        .cta-btn{
            font-size: 20px;
            padding: 8px 20px;
            color:  #419AD1;
        }
    }
</style>