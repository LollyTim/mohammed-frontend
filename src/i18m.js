import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          hello: "hello world",
          navitem: {
            home: "Home",
            about: "About Me",
            services: "Services",
            resume: "My resume",
            blog: "Blog",
            portfolio: "Portfolio",
            contact: "Contact Me",
          },
          hero: {
            welcome: "WELCOME TO MY WEBSITE",
            intro: "Hi, I'm  Mohammed Alsolami",
            whatIam1: "AI Consultant and Researcher.",
            whatIam2: "a Serial Entrepreneur.",
            resume: "My Resume",
          },
          about: {
            title: "About Me",
            description:
              "Mohammed Alsolami, an Executive board member and co-founder of over than 20 companies, is an AI strategist and serial entrepreneur with dual master's degrees in computer science and robotics, and a PhD candidate in AI. With over 10 years of experience in AI research and development, particularly in fintech and crowd-sourced applications, and 19+ years in tech development, leadership, teaching, and entrepreneurship, he has a strong background in machine learning, including researching trends and writing algorithms. Mohammed excels at translating research into publications and executive presentations, implementing successful R&D strategies, and building positive relationships with stakeholders. His deep passion for AI, machine learning, tourism, and leadership, along with his participation in over 800 conferences and events worldwide, and representing his country Saudi Arabia in international initiatives and high-tier conferences further defines his professional journey and contributions.",
          },
          quote: {
            content:
              "Artificial Intelligence is not just a field of study; it's the key to unlocking the future of countless industries and enhancing the human experience.",
            author: "Kyros Noriaki",
          },
          whatIdo: {
            title: "What I Do",
            doings1: "AI and Machine Learning",
            doings2: "Data Analysis and Visualization",
            doings3: "Cloud Platforms",
            doings4: "Databases",
            doings5: "DevOps",
            doings6: "Web Development",
            doings7: "Research Management",
            doings8: "Robotics",
            doings9: "Project Management",
          },
          Portfolio: {
            title: "My Portfolio",
          },
          Resume: {
            title: "My Resume",
            Education: "Education",
            Experiences: "Experiences",
          },
          Counters: {
            counter1: "HOURS OF WORKS",
            counter2: "PROJECTS DONE",
            counter3: "SATISFIED CUSTOMERS",
            counter4: "AWARDS WINNING",
          },
          blog: {
            title: "Recent Blog",
          },
          Contact: {
            title: "Contact Me",
            placeholder1: "Your Name",
            placeholder2: "Your email",
            placeholder3: "Your Phone number ",
            placeholder4: "Message",
            callMe: "Call Me",
            send: "Send Message",
            addressTitle: "Address",
            addressText: "Collins Street West, Louisiana, Bayerfurt, USA",
          },
        },
      },

      sa: {
        translation: {
          hello: "dfdkfdsfkdhdkh",
          navitem: {
            home: "الصفحة الرئيسية",
            about: "معلومات عني",
            services: "الخدمات",
            resume: "سيرتي الذاتية",
            blog: "المدونة",
            portfolio: "معرض الأعمال",
            contact: "اتصل بي",
          },
          hero: {
            welcome: "مرحبا بكم في موقعي",
            intro: "مرحبا، أنا جوناثان كيروس",
            whatIam1: "مستشار ومُطوّر في مجال الذكاء الاصطناعي",
            whatIam2: "رائد أعمال متسلسل",
            resume: "السيرة الذاتية",
          },
          about: {
            title: "عني",
            description:
              "محمد السلمي، عضو مجلس إدارة تنفيذي ومؤسس مشارك لأكثر من 20 شركة، وهو خبير استراتيجي في مجال الذكاء الاصطناعي ورائد أعمال متسلسل، حاصل على درجتي ماجستير في علوم الحاسب الآلي والروبوتات، ومرشح لنيل درجة الدكتوراه في الذكاء الاصطناعي. يتمتع بخبرة تزيد عن 10 سنوات في مجال البحث والتطوير في مجال الذكاء الاصطناعي، خاصةً في مجال التكنولوجيا المالية والتطبيقات التي تعتمد على الجمهور، وأكثر من 19 عاماً في مجال تطوير التكنولوجيا والقيادة والتدريس وريادة الأعمال، ولديه خلفية قوية في مجال التعلم الآلي، بما في ذلك البحث في الاتجاهات وكتابة الخوارزميات. يبرع محمد في ترجمة الأبحاث إلى منشورات وعروض تقديمية تنفيذية، وتنفيذ استراتيجيات البحث والتطوير الناجحة، وبناء علاقات إيجابية مع أصحاب المصلحة. كما أن شغفه العميق بالذكاء الاصطناعي وتعلم الآلة والسياحة والقيادة، إلى جانب مشاركته في أكثر من 800 مؤتمر وفعالية حول العالم، وتمثيله لبلده المملكة العربية السعودية في المبادرات الدولية والمؤتمرات رفيعة المستوى، كل ذلك يحدد مسيرته المهنية وإسهاماته.",
          },
          quote: {
            content:
              "افعل أكثر مما هو مطلوب. ما هو الفرق بين من يحقق أهدافه باستمرار ومن يقضون حياتهم ومسيرتهم المهنية مجرد متابعين؟ ذلك الجهد الإضافي.",
            author: "كيروس نورياكي",
          },
          whatIdo: {
            title: "ماذا أفعل",
            doings1: "الذكاء الاصطناعي والتعلم الآلي",
            doings2: "تحليل البيانات والتصور",
            doings3: "المنصات السحابية",
            doings4: "قواعد البيانات",
            doings5: "ديفوبس",
            doings6: "تطوير المواقع الإلكترونية",
            doings7: "إدارة البحوث",
            doings8: "الروبوتات",
            doings9: "إدارة المشاريع",
          },
          Portfolio: {
            title: "استثمارات",
          },
          Resume: {
            title: "سيرتي الذاتية",
            Education: "تعليم",
            Experiences: "التجارب",
          },
          Counters: {
            counter1: "ساعات العمل",
            counter2: "المشاريع المنجزة",
            counter3: "عملاء راضون",
            counter4: "حائز على جوائز",
          },
          blog: {
            title: "المدونة الأخيرة",
          },
          Contact: {
            title: "اتصل بي",
            placeholder1: "اسمك",
            placeholder2: "بريدك الإلكتروني",
            placeholder3: "رقم هاتفك",
            placeholder4: "رسالة",
            emailme: "أرسل لي بريدا إلكترونيا",
            callMe: "اتصل بي",
            addressTitle: "عنوان",
            send: "إرسال رسالة",
            addressText:
              "كولينز ستريت ويست، لويزيانا، بايرفورت، الولايات المتحدة الأمريكية",
          },
        },
      },
    },
  });
