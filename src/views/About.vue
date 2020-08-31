<template>
    <div class="content-wrapper about-wrapper">
        <div class="image-section-wrapper">
            <picture>
                <source srcset="/images/face.webp" type="image/webp" />
                <source srcset="/images/face.jpg" type="image/jpeg" />
                <img src="/images/face.jpg" alt="An image of Vanessa" />
            </picture>
            <h2>Born in Jakarta to German and Batak parents, raised in Bali and moved to Melbourne.</h2>
        </div>

        <section class="recognition">
            <p>
                I respectfully acknowledge the Yalukit Willam Clan of the Boon Wurrung, who are the traditional
                custodians of this land. I pay my respect to their Elders, in the past, present and emerging.
                Sovereignty has never been ceded.
            </p>
            <p>An outspoken LGBTQIA+ ally and a mental health advocate.</p>
        </section>

        <section class="question">
            <h1>"What grinds your gears?"</h1>
            <p>Maths excite me. Physics get me going, and don't even get me started with Chemistry.</p>
            <p>I won't stop talking about the IUPAC naming rules of different carbon categories.</p>
            <p>Epistemology makes me question everything.</p>
            <p>Anthropology is the heart of everything we know of.</p>
            <p class="bigger">
                In my heart, though, <strong>I am a problem solver</strong>. Whether I’d be doing it through creating
                products, or solving calculus, solving any kind of problem has always been my favorite thing to do.
            </p>
        </section>

        <section class="question">
            <h1>"How did you get into design?"</h1>
            <p>
                It all started with that one computer my Great Aunt, Elizabeth, had in her living room. It was one of
                those fat computers in the early 2000s. My mom and her relatives would spend a ton of time with my great
                Aunt at her house in South Jakarta.
            </p>
            <p>
                It was close to where my primary school was at the time. Often after school, I would be instructed to
                come back there before leaving for home with mom. Then I came across this software:
                <strong>Microsoft Publisher.</strong>
            </p>
            <p class="bigger">
                I began making imaginary wedding cards, gift cards for an imaginary store and many other things and I
                could remember my great aunt would get very angry because the printer would run out of ink every time.
            </p>
            <p>
                Some time after that, when I was around 12, I discovered blogging on Tumblr. It was the trendy teenage
                thing at the time. You would follow other bloggers around the world, often the same age around you, if
                not older. They all customized their blogs to look so beautiful!
            </p>
            <p class="bigger">That’s when I started messing with HTML and CSS.</p>
            <p>
                These were also the days where you could request “banners” for your blogs, and I was one of them. Simply
                put, it’s just text on photoshop on a transparent background that becomes converted to a gif with
                different designs. The blogger would then put it up as their main header of the blog.
            </p>
            <p class="bigger">
                But, let's face it. Math and the other sciences can be quite confusing and overcomplicated at times.
            </p>
            <p class="bigger">
                So, I decided to do something that would let me utilize the creative side of me a bit more.
            </p>
        </section>

        <div class="recommendations">
            <h1>Some kind words from the people I've worked with in the past</h1>
            <div class="recommendation-wrapper">
                <ComplimentCard
                    v-for="recommendation in recommendations"
                    :key="recommendation.id"
                    :texts="recommendation.texts"
                    :recommender="recommendation.recommender"
                />
            </div>
        </div>

        <section class="education">
            <h1 class="education-title">Educational Background</h1>
            <h2>
                IB Diploma
                <pre aria-hidden="true" class="graduation-date">2013 - 2015</pre>
            </h2>
            <section class="qual-detail ib-diploma">
                <p>Attended the Bali International School, taking classes in</p>
                <ul>
                    <li>Higher Level English</li>
                    <li>Higher Level Chemistry</li>
                    <li>Higher Level Indonesian</li>
                    <li>Standard Level Mathematics</li>
                    <li>Standard Level Physics</li>
                    <li>Standard Level Business</li>
                </ul>
                <p>
                    Achieved extra points awarded for excellency in my final year essay.
                    <a href="https://www.behance.net/gallery/89744451/BATAK-TOBA" target="_blank">
                        You can learn more about the achievement here.
                    </a>
                </p>
            </section>

            <h2>
                Diploma of Art and Design
                <pre aria-hidden="true" class="graduation-date">2016 - 2017</pre>
            </h2>
            <p class="qual-detail monash-college">Attended Monash College, Melbourne. Specializing in 3D design.</p>

            <h2>
                Bachelor of Industrial Design
                <pre aria-hidden="true" class="graduation-date">2018-2021</pre>
            </h2>
            <section class="qual-detail monash-uni">
                <p>Attending Monash University, Melbourne. Taking these electives:</p>
                <ul>
                    <li>Introductory Astronomy</li>
                    <li>Introductory Philosophy</li>
                    <li>Product Drawing</li>
                    <li>Concept Art for Design</li>
                    <li>Modelmaking</li>
                    <li>Sustainability</li>
                    <li>Furniture</li>
                    <li>UX Design</li>
                    <li>Mouldmaking and Casting</li>
                </ul>
            </section>
        </section>
    </div>
</template>

<script>
    import recommendations from "@/assets/lists/recommendationList.json";
    import ComplimentCard from "@/components/ComplimentCard";

    export default {
        name: "About",
        metaInfo: {
            title: "Vanessa | About"
        },
        components: {
            ComplimentCard
        },
        data() {
            return {
                recommendations: recommendations
            };
        }
    };
</script>

<style lang="scss">
    .about-wrapper {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        justify-content: center;
        color: $off-white;
        width: 75%;
        margin: 0 auto;

        section {
            padding: 25px;
            background: $color-secondary;
            margin: 20px auto;
            width: 100%;
        }
    }

    .image-section-wrapper {
        display: flex;
        flex-flow: row nowrap;
        justify-items: center;
        align-items: center;
        width: 50%;
        margin: 0 auto 30px auto;
        padding: 25px;

        img {
            width: 100%;
            height: auto;
            pointer-events: none;
            user-select: none;
            box-shadow: 0 0 5px 1px black;
        }

        h2 {
            font-size: 2rem;
            margin-left: 25px;
        }
    }

    .recognition {
        font-size: 1.5rem;
        text-align: center;
        border-top: 2px solid $highlight-about;
        border-bottom: 2px solid $highlight-about;

        p {
            margin: 15px 0;
        }
    }

    .question {
        h1 {
            font-size: 4rem;
            margin-bottom: 20px;

            &:before {
                content: "Q: ";
            }
        }

        p {
            font-size: 1.3rem;
            font-family: "Aeonik Medium", sans-serif;
            margin: 15px 0;

            &.bigger {
                font-size: 1.5rem;
            }
        }
    }

    .recommendations {
        h1 {
            text-align: center;
            margin: 20px auto;
            font-size: 3rem;
        }

        .recommendation-wrapper {
            display: flex;
            justify-content: space-between;
            flex-flow: row wrap;
            margin-bottom: 30px;
        }

        .recommendation {
            border-left: 5px solid $highlight-about;
        }

        .reference-link:hover {
            color: $highlight-about;
            text-decoration: underline $highlight-about;
        }
    }

    .education-title {
        font-size: 4rem;
    }

    .education {
        box-sizing: content-box;
        display: grid;
        grid-template: 1fr 2fr 1fr 2fr / 1fr 1fr;
        grid-template-areas: "title title" ". ." ". .";

        .education-title {
            grid-area: title;
            justify-self: center;
        }

        section {
            background: none;
            margin: 0px 0 30px 0;
            padding: 0;
        }

        p {
            font-family: "Aeonik Medium", sans-serif;
            font-size: 1.4rem;
        }

        a {
            text-decoration: underline $off-white;
            color: $off-white;
            transition: all 100ms ease-in-out;

            &:hover {
                text-decoration: underline $highlight-about;
                color: $highlight-about;
            }
        }

        .graduation-date {
            margin: 5px 0;
            padding: 0;
            font-size: 1.4rem;
        }

        h2 {
            font-size: 1.9rem;
            margin-left: 30px;
            text-align: left;
        }

        ul li {
            font-size: 1.4rem;
            font-family: "Aeonik Medium", sans-serif;
        }
    }

    @import "../styles/media-query/_about";
</style>
