"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'es';

export interface Translations {
  // Navbar
  nav: {
    features: string;
    howItWorks: string;
    forTeachers: string;
    pricing: string;
    faq: string;
    login: string;
    getStarted: string;
  };
  // Hero
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaTeachers: string;
    ctaSolo: string;
    trustNote: string;
  };
  // For Whom
  forWhom: {
    title: string;
    subtitle: string;
    students: {
      title: string;
      description: string;
      points: string[];
      cta: string;
    };
    teachers: {
      title: string;
      description: string;
      points: string[];
      cta: string;
    };
  };
  // Main Advantage
  mainAdvantage: {
    badge: string;
    title: string;
    subtitle: string;
    teacherLabel: string;
    studentLabel: string;
    sendButton: string;
    sentLabel: string;
    receivedLabel: string;
    liveNote: string;
    features: {
      instant: string;
      progress: string;
      sessions: string;
    };
    // Demo panel (hardcoded labels, names, states moved to i18n for localization)
    exerciseName: string;
    exerciseMeta: string;
    refCode: string;
    accents: string;
    level: string;
    newBadge: string;
    sending: string;
    waitingForExercise: string;
    receivingUpdate: string;
    pushNote: string;
    teacherName: string;
    studentName: string;
    online: string;
    practicing: string;
    screenshotAlt: string;
  };
  // Features
  features: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  // How it Works
  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: number;
      title: string;
      description: string;
    }>;
  };
  // For Teachers dedicated
  forTeachers: {
    title: string;
    subtitle: string;
    highlight: string;
    cta: string;
    capabilities: Array<{
      title: string;
      description: string;
    }>;
  };
  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    tabs: {
      students: string;
      teachers: string;
    };
    students: {
      free: {
        name: string;
        price: string;
        period: string;
        description: string;
        cta: string;
        features: string[];
      };
      basic: {
        name: string;
        price: string;
        period: string;
        description: string;
        cta: string;
        features: string[];
        popular?: boolean;
      };
      pro: {
        name: string;
        price: string;
        period: string;
        description: string;
        cta: string;
        features: string[];
      };
    };
    teachers: {
      s: {
        name: string;
        price: string;
        period: string;
        description: string;
        cta: string;
        features: string[];
      };
      m: {
        name: string;
        price: string;
        period: string;
        description: string;
        cta: string;
        features: string[];
        popular?: boolean;
      };
      l: {
        name: string;
        price: string;
        period: string;
        description: string;
        cta: string;
        features: string[];
      };
    };
    label: string;
    mostPopular: string;
    bestValue: string;
    limits: string;
    billedMonthly: string;
  };
  // FAQ
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  // Footer
  footer: {
    tagline: string;
    product: string;
    resources: string;
    company: string;
    copyright: string;
    madeFor: string;
    links: {
      features: string;
      pricing: string;
      forTeachers: string;
      blog: string;
      docs: string;
      support: string;
      about: string;
      careers: string;
      contact: string;
      privacy: string;
      terms: string;
      refund: string;
    };
  };
  // Modals
  modal: {
    login: {
      title: string;
      subtitle: string;
      email: string;
      password: string;
      submit: string;
      noAccount: string;
      switchToSignup: string;
    };
    signup: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      password: string;
      role: string;
      roleStudent: string;
      roleTeacher: string;
      submit: string;
      haveAccount: string;
      switchToLogin: string;
    };
    demo: {
      title: string;
      subtitle: string;
      close: string;
      // Play button (disabled state) + video stub labels (Task 4B)
      play: string;
      overview: string;
      description: string;
    };
  };
  // Misc
  misc: {
    or: string;
    perMonth: string;
    studentsLabel: string;
    presets: string;
    unlimited: string;
  };
  // Section header labels (small uppercase badges) + RhythmVisualizer labels
  labels: {
    capabilities: string;
    questions: string;
    whoItsFor: string;
    dedicatedToEducators: string;
    simpleWorkflow: string;
    notationEditor: string;
    notationHint: string;
  };
  // Final CTA (after FAQ, last conversion push)
  finalCta: {
    heading: string;
    sub: string;
    cta: string;
  };
  // Consent banner (strict GDPR/UK GDPR/LGPD/CCPA mode — texts only added, never modify other sections)
  consent: {
    banner: string;
    accept: string;
    decline: string;
    privacy: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      forTeachers: "For Teachers",
      pricing: "Pricing",
      faq: "FAQ",
      login: "Log in",
      getStarted: "Get started",
    },
    hero: {
      badge: "For drum teachers",
      title: "Your students actually practice between lessons",
      subtitle: "Assign drum homework in notation, run live lessons, and track progress — powered by an endless exercise generator.",
      ctaPrimary: "Start free",
      ctaSecondary: "Watch demo",
      ctaTeachers: "For teachers",
      ctaSolo: "Just practicing solo? →",
      trustNote: "Early access — be among the first teachers on board.",
    },
    forWhom: {
      title: "Built for drum teachers and students",
      subtitle: "For drum teachers who want their students to actually practice between lessons — and for drummers practicing on their own.",
      students: {
        title: "For students",
        description: "Practice effectively on your own. Full rudiments & exercises library, smart generator, advanced metronome, and notation editor — free on the Free plan.",
        points: [
          "Interactive notation editor",
          "Full rudiments & exercises library",
          "Smart generator for personalized practice",
          "Advanced metronome with Auto Tempo Change",
          "Track your progress over time",
        ],
        cta: "Start free",
      },
      teachers: {
        title: "For teachers",
        description: "Teach live. Send exercises in real time, monitor progress, and run engaging online sessions.",
        points: [
          "Real-time exercise delivery",
          "Student progress dashboard",
          "Live online lesson sessions",
          "Save your presets and organize lessons",
          "Professional tools for every lesson",
        ],
        cta: "Start free",
      },
    },
    mainAdvantage: {
      badge: "The GrooveLab advantage",
      title: "Real-time connection between teacher and student",
      subtitle: "The moment a teacher sends or edits an exercise, the student sees it live. No emails. No screenshots. Pure musical flow.",
      teacherLabel: "Teacher",
      studentLabel: "Student",
      sendButton: "Send exercise",
      sentLabel: "Sent to student",
      receivedLabel: "Received instantly",
      liveNote: "Changes appear on the student side instantly",
      features: {
        instant: "Instant sync",
        progress: "Progress tracking",
        sessions: "Live sessions",
      },
      // Demo panel strings (localized in 4B; technical BPM/bars kept as-is for animation)
      exerciseName: "Double Stroke Roll — 16th notes",
      exerciseMeta: "Rudiments • 110 BPM • 4 bars",
      refCode: "R-07",
      accents: "ACCENTS: 2 & 4",
      level: "LEVEL: INTERMEDIATE",
      newBadge: "NEW",
      sending: "SENDING...",
      waitingForExercise: "Waiting for new exercise from teacher...",
      receivingUpdate: "Receiving update...",
      pushNote: "Real-time push to all connected students",
      teacherName: "Ms. Elena Vargas",
      studentName: "Alex Rivera",
      online: "Online",
      practicing: "Practicing",
      screenshotAlt: "GrooveLab live session — teacher view",
    },
    features: {
      title: "Everything you need to grow",
      subtitle: "Professional-grade tools designed specifically for drummers and percussion educators.",
      items: [
        {
          title: "Notation Editor",
          description: "Write and save short scores and etudes directly in the editor. Combine traditional notation with the step grid for fast, precise editing.",
        },
        {
          title: "Smart Generator",
          description: "Generate endless variations of rhythms and exercises instantly. Control complexity, style, rudiment types, and musical phrasing.",
        },
        {
          title: "Rudiments Library",
          description: "Complete collection: Single Stroke Roll, Double Stroke Roll, Triple Stroke Roll, Paradiddle, Flam, Drag, Ratamacue, and dozens more with audio references.",
        },
        {
          title: "Exercises",
          description: "Train timing and coordination. Practice fills and grooves using accents, flams, drags, rolls, bass drum patterns, and many other techniques.",
        },
        {
          title: "Advanced Metronome",
          description: "Professional metronome featuring subdivision options, Auto Tempo Change, programmable tempo maps, and seamless integration with your exercises.",
        },
        {
          title: "Presets & Organization",
          description: "Save your presets (on paid plans), organize by student, lesson, or difficulty. Fast recall during live teaching.",
        },
      ],
    },
    howItWorks: {
      title: "How GrooveLab works",
      subtitle: "From first note to live lesson in four simple steps.",
      steps: [
        {
          number: 1,
          title: "Create or choose",
          description: "Use the notation editor or smart generator to build a rhythm, exercise, or full lesson in seconds.",
        },
        {
          number: 2,
          title: "Save as preset",
          description: "Organize your material into clean presets. Add notes, tempo maps, and difficulty tags for your students.",
        },
        {
          number: 3,
          title: "Send in real time",
          description: "With one click, push the exercise directly to your student's app. They see it immediately, ready to practice.",
        },
        {
          number: 4,
          title: "Track & iterate",
          description: "Watch practice data roll in. Give live feedback, adjust difficulty, and run synchronized online sessions.",
        },
      ],
    },
    forTeachers: {
      title: "Powerful tools for modern drum teachers",
      subtitle: "Stop sending PDFs. Start teaching in the moment.",
      highlight: "Real-time is not a feature — it's the foundation.",
      cta: "Start teaching today",
      capabilities: [
        {
          title: "Live Exercise Delivery",
          description: "Edit an exercise mid-lesson and every connected student receives the update instantly. Perfect for online classes and private lessons.",
        },
        {
          title: "Student Progress Tracking",
          description: "See practice time, accuracy, tempo progress, and completed exercises for every student. Identify issues before the next lesson.",
        },
        {
          title: "Live Online Sessions",
          description: "Run live lessons — group or 1-on-1 — in real time. Everyone plays the same material at the same time with shared metronome control.",
        },
        {
          title: "Homework & Progress",
          description: "Assign homework and track student progress (done / not done). Clear status for each exercise.",
        },
      ],
    },
    pricing: {
      label: "PRICING",
      mostPopular: "MOST POPULAR",
      bestValue: "BEST VALUE",
      title: "Simple, transparent pricing",
      subtitle: "Choose the plan that fits your goals. Upgrade or downgrade anytime.",
      tabs: {
        students: "For Students",
        teachers: "For Teachers",
      },
      students: {
        free: {
          name: "Free",
          price: "$0",
          period: "forever",
          description: "Perfect for exploring the platform",
          cta: "Start free",
          features: [
            "10 exercises per day",
            "2 saved presets",
            "All 40+ rudiments included",
            "Metronome, notation & generator",
            "Join live sessions",
          ],
        },
        basic: {
          name: "Basic",
          price: "$9",
          period: "",
          description: "For serious students",
          cta: "Start free",
          popular: true,
          features: [
            "Unlimited exercise generation",
            "Save up to 10 presets",
            "Advanced rudiments & exercises",
            "Auto-generated exercises",
            "Join live sessions",
          ],
        },
        pro: {
          name: "Pro",
          price: "$19",
          period: "",
          description: "Everything for dedicated practice",
          cta: "Start free",
          features: [
            "Everything in Basic",
            "Save up to 50 presets",
            "Pro-level exercises",
            "Advanced pattern generation",
            "Host live sessions",
          ],
        },
      },
      teachers: {
        s: {
          name: "Teacher S",
          price: "$19",
          period: "",
          description: "Up to 5 students",
          cta: "Start free",
          features: [
            "Everything in Pro",
            "Up to 5 students",
            "Assign homework",
            "Host live lessons",
            "Track student progress",
            "Save up to 50 presets",
          ],
        },
        m: {
          name: "Teacher M",
          price: "$39",
          period: "",
          description: "Up to 30 students",
          cta: "Start free",
          popular: true,
          features: [
            "Everything in Pro",
            "Up to 30 students",
            "Assign homework",
            "Host live lessons",
            "Track student progress",
            "Save up to 50 presets",
          ],
        },
        l: {
          name: "Teacher L",
          price: "$79",
          period: "",
          description: "Unlimited students",
          cta: "Start free",
          features: [
            "Everything in Pro",
            "Unlimited students",
            "Assign homework",
            "Host live lessons",
            "Track student progress",
            "Save up to 50 presets",
          ],
        },
      },
      limits: "Start free — 10 exercises per day, no card required.",
      billedMonthly: "Billed monthly in USD.",
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Everything you need to know about GrooveLab.",
      items: [
        {
          question: "Can students use GrooveLab without a teacher?",
          answer: "Absolutely. Many students use the Free and Pro plans independently to practice rudiments, build technique, and stay organized with the smart generator and advanced metronome.",
        },
        {
          question: "How does real-time delivery actually work?",
          answer: "When a teacher sends or edits an exercise, it is pushed instantly through our real-time infrastructure. The student’s app updates in real time — no refresh needed.",
        },
        {
          question: "Do I need special hardware or an app?",
          answer: "GrooveLab runs in your browser on any device — no installation required.",
        },
        {
          question: "Can I cancel or change plans anytime?",
          answer: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings. Your data remains safe, and you keep access until the end of the paid period.",
        },
        {
          question: "What languages are supported?",
          answer: "The interface is fully available in English, Russian, and Spanish. More languages are planned based on community demand.",
        },
      ],
    },
    footer: {
      tagline: "Professional tools for drummers who want to play better — and teachers who want to teach better.",
      product: "Product",
      resources: "Resources",
      company: "Company",
      copyright: "© GrooveLab. All rights reserved.",
      madeFor: "Made for musicians who care about the craft.",
      links: {
        features: "Features",
        pricing: "Pricing",
        forTeachers: "For Teachers",
        blog: "Blog",
        docs: "Documentation",
        support: "Support",
        about: "About",
        careers: "Careers",
        contact: "Contact",
        privacy: "Privacy",
        terms: "Terms",
        refund: "Refund Policy",
      },
    },
    modal: {
      login: {
        title: "Welcome back",
        subtitle: "Log in to continue practicing or teaching",
        email: "Email",
        password: "Password",
        submit: "Log in",
        noAccount: "Don't have an account?",
        switchToSignup: "Sign up",
      },
      signup: {
        title: "Create your account",
        subtitle: "Join thousands of drummers improving every day",
        name: "Full name",
        email: "Email",
        password: "Password",
        role: "I am a",
        roleStudent: "Student",
        roleTeacher: "Teacher",
        submit: "Create account",
        haveAccount: "Already have an account?",
        switchToLogin: "Log in",
      },
      demo: {
        title: "See GrooveLab in action",
        subtitle: "Watch how teachers and students stay perfectly in sync.",
        close: "Close",
        // 4B: disabled Play + localized stub
        play: "Demo coming soon",
        overview: "PRODUCT OVERVIEW",
        description: "See how teachers deliver exercises to students, control a shared metronome during live sessions, and track student progress (done / not done).",
      },
    },
    misc: {
      or: "or",
      perMonth: "/mo",
      studentsLabel: "students",
      presets: "presets",
      unlimited: "Unlimited",
    },
    labels: {
      capabilities: "CAPABILITIES",
      questions: "QUESTIONS",
      whoItsFor: "WHO IT'S FOR",
      dedicatedToEducators: "DEDICATED TO EDUCATORS",
      simpleWorkflow: "SIMPLE WORKFLOW",
      notationEditor: "NOTATION EDITOR",
      notationHint: "Click the pads to write notes — just like in the editor",
    },
    finalCta: {
      heading: "Give your students a reason to practice",
      sub: "Assign homework in notation, run live lessons, and track progress. Start free — no card required.",
      cta: "Start free",
    },
    consent: {
      banner: "We use privacy-friendly analytics to understand how visitors use the site. You can accept or decline below.",
      accept: "Accept",
      decline: "Decline",
      privacy: "Privacy Policy",
    },
  },

  ru: {
    nav: {
      features: "Возможности",
      howItWorks: "Как это работает",
      forTeachers: "Для преподавателей",
      pricing: "Тарифы",
      faq: "FAQ",
      login: "Войти",
      getStarted: "Начать",
    },
    hero: {
      badge: "Для преподавателей барабанов",
      title: "Ваши ученики реально занимаются между уроками",
      subtitle: "Задавайте ДЗ в нотации, ведите live-уроки и отслеживайте прогресс — на базе бесконечного генератора упражнений.",
      ctaPrimary: "Начать бесплатно",
      ctaSecondary: "Смотреть демо",
      ctaTeachers: "Для учителей",
      ctaSolo: "Занимаетесь самостоятельно? →",
      trustNote: "Ранний доступ — будьте среди первых преподавателей.",
    },
    forWhom: {
      title: "Создано для преподавателей и учеников",
      subtitle: "Для преподавателей, которые хотят, чтобы ученики реально занимались между уроками — и для тех, кто занимается самостоятельно.",
      students: {
        title: "Для учеников",
        description: "Занимайтесь эффективно самостоятельно. Полная библиотека рудиментов и упражнений, умный генератор, продвинутый метроном и нотный редактор — бесплатно на тарифе Free.",
        points: [
          "Интерактивный нотный редактор",
          "Полная библиотека рудиментов и упражнений",
          "Умный генератор персональных упражнений",
          "Продвинутый метроном с автосменой темпа",
          "Отслеживание прогресса во времени",
        ],
        cta: "Начать бесплатно",
      },
      teachers: {
        title: "Для преподавателей",
        description: "Преподавай вживую. Отправляй упражнения в реальном времени, следи за прогрессом и проводи онлайн-занятия.",
        points: [
          "Мгновенная доставка упражнений",
          "Дашборд прогресса учеников",
          "Инструменты для живых онлайн-уроков",
          "Сохраняйте свои пресеты и организуйте уроки",
          "Профессиональный инструмент для каждого занятия",
        ],
        cta: "Начать бесплатно",
      },
    },
    mainAdvantage: {
      badge: "Главное преимущество GrooveLab",
      title: "Реал-тайм связь между учителем и учеником",
      subtitle: "Как только преподаватель отправляет или редактирует упражнение — ученик сразу видит изменения. Без писем и скриншотов. Только чистый музыкальный поток.",
      teacherLabel: "Преподаватель",
      studentLabel: "Ученик",
      sendButton: "Отправить упражнение",
      sentLabel: "Отправлено ученику",
      receivedLabel: "Получено мгновенно",
      liveNote: "Изменения появляются на стороне ученика мгновенно",
      features: {
        instant: "Мгновенная синхронизация",
        progress: "Отслеживание прогресса",
        sessions: "Живые сессии",
      },
      // Demo panel strings (локализовано в 4B)
      exerciseName: "Двойной рулл — шестнадцатые ноты",
      exerciseMeta: "Рудименты • 110 BPM • 4 такта",
      refCode: "R-07",
      accents: "АКЦЕНТЫ: 2 и 4",
      level: "УРОВЕНЬ: СРЕДНИЙ",
      newBadge: "НОВОЕ",
      sending: "ОТПРАВКА...",
      waitingForExercise: "Ожидание нового упражнения от преподавателя...",
      receivingUpdate: "Получение обновления...",
      pushNote: "Мгновенная отправка всем подключённым ученикам",
      teacherName: "Ms. Elena Vargas",
      studentName: "Alex Rivera",
      online: "В сети",
      practicing: "Занимается",
      screenshotAlt: "GrooveLab live-сессия — вид преподавателя",
    },
    features: {
      title: "Всё необходимое для роста",
      subtitle: "Профессиональные инструменты, созданные специально для барабанщиков и педагогов по ударным.",
      items: [
        {
          title: "Нотный редактор",
          description: "Записывайте и сохраняйте короткие партитуры и этюды. Работайте одновременно с нотным станом и сеткой кубиков.",
        },
        {
          title: "Умный генератор",
          description: "Мгновенно генерируйте бесконечные вариации ритмов и упражнений. Контролируйте сложность, стиль, типы рудиментов и музыкальные фразы.",
        },
        {
          title: "Библиотека рудиментов",
          description: "Полная коллекция: Single Stroke Roll, Double Stroke Roll, Triple Stroke Roll, Paradiddle, Flam, Drag, Ratamacue и десятки других с аудио-примерами.",
        },
        {
          title: "Упражнения",
          description: "Развивайте чувство длительностей и координацию. Отрабатывайте сбивки и грувы с помощью акцентов, флэмов, дрэгов, роллов, бочки и других приёмов.",
        },
        {
          title: "Продвинутый метроном",
          description: "Профессиональный метроном с подразделениями, функцией Auto Tempo Change, программируемыми картами темпа и интеграцией с упражнениями.",
        },
        {
          title: "Пресеты и организация",
          description: "Сохраняйте свои пресеты (на платных тарифах), организуйте по ученикам, урокам или уровню сложности. Быстрый доступ во время урока.",
        },
      ],
    },
    howItWorks: {
      title: "Как работает GrooveLab",
      subtitle: "От первой ноты до живого урока — всего четыре шага.",
      steps: [
        {
          number: 1,
          title: "Создай или выбери",
          description: "Используй нотный редактор или умный генератор, чтобы за секунды собрать ритм, упражнение или целый урок.",
        },
        {
          number: 2,
          title: "Сохрани как пресет",
          description: "Организуй материал в удобные пресеты. Добавь заметки, карты темпа и метки сложности для учеников.",
        },
        {
          number: 3,
          title: "Отправь в реальном времени",
          description: "Одним кликом отправь упражнение прямо в приложение ученика. Он видит его мгновенно и может сразу практиковать.",
        },
        {
          number: 4,
          title: "Отслеживай и улучшай",
          description: "Получай данные о практике. Давай обратную связь в реальном времени, меняй сложность и проводи синхронизированные уроки.",
        },
      ],
    },
    forTeachers: {
      title: "Мощные инструменты для современных преподавателей",
      subtitle: "Перестань отправлять PDF. Начни преподавать в моменте.",
      highlight: "Реал-тайм — это не просто функция. Это основа платформы.",
      cta: "Начать преподавать",
      capabilities: [
        {
          title: "Мгновенная отправка упражнений",
          description: "Редактируй упражнение прямо во время урока — все подключённые ученики получают обновление мгновенно. Идеально для онлайн-уроков и частных занятий.",
        },
        {
          title: "Отслеживание прогресса учеников",
          description: "Смотри время практики, точность, рост темпа и выполненные упражнения каждого ученика. Видишь проблемы до следующего занятия.",
        },
        {
          title: "Живые онлайн-сессии",
          description: "Проводите live-уроки — для группы или один на один — в реальном времени. Все играют один материал одновременно под общим метрономом.",
        },
        {
          title: "Домашние задания и прогресс",
          description: "Задавайте ДЗ и отслеживайте прогресс учеников (сделано / не сделано). Понятный статус по каждому упражнению.",
        },
      ],
    },
    pricing: {
      label: "ТАРИФЫ",
      mostPopular: "ПОПУЛЯРНЫЙ ВЫБОР",
      bestValue: "ЛУЧШАЯ ЦЕНА",
      title: "Простые и прозрачные тарифы",
      subtitle: "Выбери план под свои задачи. Меняй тариф в любой момент.",
      tabs: {
        students: "Для учеников",
        teachers: "Для преподавателей",
      },
      students: {
        free: {
          name: "Бесплатно",
          price: "0",
          period: "навсегда",
          description: "Отлично для знакомства с платформой",
          cta: "Начать бесплатно",
          features: [
            "10 упражнений в день",
            "2 сохранённых пресета",
            "Все 40+ рудиментов включены",
            "Метроном, нотация и генератор",
            "Присоединяться к живым сессиям",
          ],
        },
        basic: {
          name: "Basic",
          price: "9",
          period: "",
          description: "Для серьёзных учеников",
          cta: "Начать бесплатно",
          popular: true,
          features: [
            "Безлимитная генерация упражнений",
            "Сохранять до 10 пресетов",
            "Продвинутые рудименты и упражнения",
            "Автогенерируемые упражнения",
            "Присоединяться к живым сессиям",
          ],
        },
        pro: {
          name: "Pro",
          price: "19",
          period: "",
          description: "Всё для серьёзной практики",
          cta: "Начать бесплатно",
          features: [
            "Всё из Basic",
            "Сохранять до 50 пресетов",
            "Упражнения уровня Pro",
            "Продвинутая генерация паттернов",
            "Проводить живые сессии",
          ],
        },
      },
      teachers: {
        s: {
          name: "Teacher S",
          price: "19",
          period: "",
          description: "До 5 учеников",
          cta: "Начать бесплатно",
          features: [
            "Всё из Pro",
            "До 5 учеников",
            "Назначать домашние задания",
            "Проводить живые уроки",
            "Просматривать прогресс учеников",
            "Сохранять до 50 пресетов",
          ],
        },
        m: {
          name: "Teacher M",
          price: "39",
          period: "",
          description: "До 30 учеников",
          cta: "Начать бесплатно",
          popular: true,
          features: [
            "Всё из Pro",
            "До 30 учеников",
            "Назначать домашние задания",
            "Проводить живые уроки",
            "Просматривать прогресс учеников",
            "Сохранять до 50 пресетов",
          ],
        },
        l: {
          name: "Teacher L",
          price: "79",
          period: "",
          description: "Без ограничения учеников",
          cta: "Начать бесплатно",
          features: [
            "Всё из Pro",
            "Неограниченное число учеников",
            "Назначать домашние задания",
            "Проводить живые уроки",
            "Просматривать прогресс учеников",
            "Сохранять до 50 пресетов",
          ],
        },
      },
      limits: "Начните бесплатно — 10 упражнений в день, карта не требуется.",
      billedMonthly: "Оплата ежемесячно в USD.",
    },
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Всё, что нужно знать о GrooveLab.",
      items: [
        {
          question: "Можно ли пользоваться GrooveLab без преподавателя?",
          answer: "Конечно. Многие ученики используют бесплатный и Pro-тарифы самостоятельно, чтобы отрабатывать рудименты, развивать технику и систематизировать занятия с помощью генератора и метронома.",
        },
        {
          question: "Как именно работает мгновенная отправка упражнений?",
          answer: "Когда преподаватель отправляет или редактирует упражнение, оно мгновенно передаётся через нашу real-time инфраструктуру. Приложение ученика обновляется в реальном времени — без перезагрузки.",
        },
        {
          question: "Нужно ли специальное оборудование или приложение?",
          answer: "GrooveLab работает в браузере на любом устройстве — без установки.",
        },
        {
          question: "Можно ли отменить или сменить тариф в любой момент?",
          answer: "Да. Ты можешь повысить, понизить или отменить подписку в любой момент в настройках аккаунта. Данные сохраняются, доступ остаётся до конца оплаченного периода.",
        },
        {
          question: "Какие языки поддерживаются?",
          answer: "Интерфейс полностью доступен на английском, русском и испанском. Планируем добавлять новые языки по запросам сообщества.",
        },
      ],
    },
    footer: {
      tagline: "Профессиональные инструменты для барабанщиков, которые хотят играть лучше, и преподавателей, которые хотят учить лучше.",
      product: "Продукт",
      resources: "Ресурсы",
      company: "Компания",
      copyright: "© GrooveLab. Все права защищены.",
      madeFor: "Сделано для музыкантов, которым важно мастерство.",
      links: {
        features: "Возможности",
        pricing: "Тарифы",
        forTeachers: "Для преподавателей",
        blog: "Блог",
        docs: "Документация",
        support: "Поддержка",
        about: "О нас",
        careers: "Вакансии",
        contact: "Контакты",
        privacy: "Конфиденциальность",
        terms: "Условия",
        refund: "Политика возвратов",
      },
    },
    modal: {
      login: {
        title: "С возвращением",
        subtitle: "Войди, чтобы продолжить практику или преподавание",
        email: "Email",
        password: "Пароль",
        submit: "Войти",
        noAccount: "Нет аккаунта?",
        switchToSignup: "Зарегистрироваться",
      },
      signup: {
        title: "Создай аккаунт",
        subtitle: "Присоединяйся к тысячам барабанщиков, которые совершенствуются каждый день",
        name: "Полное имя",
        email: "Email",
        password: "Пароль",
        role: "Я",
        roleStudent: "Ученик",
        roleTeacher: "Преподаватель",
        submit: "Создать аккаунт",
        haveAccount: "Уже есть аккаунт?",
        switchToLogin: "Войти",
      },
      demo: {
        title: "Посмотри GrooveLab в действии",
        subtitle: "Узнай, как учителя и ученики остаются идеально синхронизированными.",
        close: "Закрыть",
        // 4B: disabled Play + локализованная заглушка
        play: "Демо скоро",
        overview: "ОБЗОР ПРОДУКТА",
        description: "Посмотрите, как преподаватели мгновенно доставляют упражнения ученикам, управляют общим метрономом во время живых сессий и отслеживают прогресс учеников (сделано / не сделано).",
      },
    },
    misc: {
      or: "или",
      perMonth: "/мес",
      studentsLabel: "учеников",
      presets: "пресетов",
      unlimited: "Безлимитно",
    },
    labels: {
      capabilities: "ВОЗМОЖНОСТИ",
      questions: "ВОПРОСЫ",
      whoItsFor: "ДЛЯ КОГО",
      dedicatedToEducators: "ДЛЯ ПРЕПОДАВАТЕЛЕЙ",
      simpleWorkflow: "КАК ЭТО РАБОТАЕТ",
      notationEditor: "НОТНЫЙ РЕДАКТОР",
      notationHint: "Нажимайте на пэды, чтобы записывать ноты — как в редакторе",
    },
    finalCta: {
      heading: "Дайте ученикам повод заниматься",
      sub: "Задавайте ДЗ в нотации, ведите live-уроки и отслеживайте прогресс. Начните бесплатно — без карты.",
      cta: "Начать бесплатно",
    },
    consent: {
      banner: "Мы используем приватную аналитику, чтобы понимать, как посетители пользуются сайтом. Вы можете принять или отклонить ниже.",
      accept: "Принять",
      decline: "Отклонить",
      privacy: "Политика конфиденциальности",
    },
  },

  es: {
    nav: {
      features: "Características",
      howItWorks: "Cómo funciona",
      forTeachers: "Para profesores",
      pricing: "Precios",
      faq: "FAQ",
      login: "Iniciar sesión",
      getStarted: "Comenzar",
    },
    hero: {
      badge: "Para profesores de batería",
      title: "Tus alumnos practican de verdad entre clases",
      subtitle: "Asigna tareas en notación, da clases en vivo y sigue el progreso — con un generador infinito de ejercicios.",
      ctaPrimary: "Empieza gratis",
      ctaSecondary: "Ver demo",
      ctaTeachers: "Para profesores",
      ctaSolo: "¿Practicas en solitario? →",
      trustNote: "Acceso anticipado — sé de los primeros profesores.",
    },
    forWhom: {
      title: "Creado para profesores y estudiantes",
      subtitle: "Para profesores de batería que quieren que sus alumnos practiquen de verdad entre clases — y para bateristas que practican solos.",
      students: {
        title: "Para estudiantes",
        description: "Practica de forma efectiva por tu cuenta. Biblioteca completa de rudimentos y ejercicios, generador inteligente, metrónomo avanzado y editor de notación — gratis en el plan Free.",
        points: [
          "Editor de notación interactivo",
          "Biblioteca completa de rudimentos y ejercicios",
          "Generador inteligente para práctica personalizada",
          "Metrónomo avanzado con Auto Tempo Change",
          "Seguimiento de tu progreso a lo largo del tiempo",
        ],
        cta: "Empieza gratis",
      },
      teachers: {
        title: "Para profesores",
        description: "Enseña en vivo. Envía ejercicios en tiempo real, monitorea el progreso y dirige sesiones en línea atractivas.",
        points: [
          "Entrega de ejercicios en tiempo real",
          "Panel de progreso de estudiantes",
          "Herramientas para lecciones en vivo en línea",
          "Guarda tus presets y organiza las lecciones",
          "Herramientas profesionales para cada clase",
        ],
        cta: "Empieza gratis",
      },
    },
    mainAdvantage: {
      badge: "La ventaja de GrooveLab",
      title: "Conexión en tiempo real entre profesor y alumno",
      subtitle: "En el momento en que un profesor envía o edita un ejercicio, el alumno lo ve en vivo. Sin correos. Sin capturas de pantalla. Flujo musical puro.",
      teacherLabel: "Profesor",
      studentLabel: "Alumno",
      sendButton: "Enviar ejercicio",
      sentLabel: "Enviado al alumno",
      receivedLabel: "Recibido al instante",
      liveNote: "Los cambios aparecen en el lado del alumno al instante",
      features: {
        instant: "Sincronización instantánea",
        progress: "Seguimiento de progreso",
        sessions: "Sesiones en vivo",
      },
      // Demo panel strings (localizado en 4B)
      exerciseName: "Double Stroke Roll — semicorcheas",
      exerciseMeta: "Rudimentos • 110 BPM • 4 compases",
      refCode: "R-07",
      accents: "ACENTOS: 2 y 4",
      level: "NIVEL: INTERMEDIO",
      newBadge: "NUEVO",
      sending: "ENVIANDO...",
      waitingForExercise: "Esperando nuevo ejercicio del profesor...",
      receivingUpdate: "Recibiendo actualización...",
      pushNote: "Envío en tiempo real a todos los alumnos conectados",
      teacherName: "Ms. Elena Vargas",
      studentName: "Alex Rivera",
      online: "En línea",
      practicing: "Practicando",
      screenshotAlt: "GrooveLab sesión en vivo — vista del profesor",
    },
    features: {
      title: "Todo lo que necesitas para crecer",
      subtitle: "Herramientas de nivel profesional diseñadas específicamente para bateristas y educadores de percusión.",
      items: [
        {
          title: "Editor de notación",
          description: "Escribe y guarda partituras cortas y estudios. Combina la notación tradicional con la cuadrícula de pasos para una edición rápida y precisa.",
        },
        {
          title: "Generador inteligente",
          description: "Genera variaciones infinitas de ritmos y ejercicios al instante. Controla complejidad, estilo, tipos de rudimentos y frases musicales.",
        },
        {
          title: "Biblioteca de rudimentos",
          description: "Colección completa: Single Stroke Roll, Double Stroke Roll, Triple Stroke Roll, Paradiddle, Flam, Drag, Ratamacue y muchos más con referencias de audio.",
        },
        {
          title: "Ejercicios",
          description: "Entrena el sentido del ritmo y la coordinación. Practica fills usando acentos, flams, drags, rolls, patrones de bombo y muchas otras técnicas.",
        },
        {
          title: "Metrónomo avanzado",
          description: "Metrónomo profesional con opciones de subdivisión, Auto Tempo Change, mapas de tempo programables e integración perfecta con tus ejercicios.",
        },
        {
          title: "Presets y organización",
          description: "Guarda tus presets (en planes de pago), organiza por alumno, lección o dificultad. Recuperación rápida durante la enseñanza en vivo.",
        },
      ],
    },
    howItWorks: {
      title: "Cómo funciona GrooveLab",
      subtitle: "Desde la primera nota hasta la lección en vivo en cuatro pasos sencillos.",
      steps: [
        {
          number: 1,
          title: "Crea o elige",
          description: "Usa el editor de notación o el generador inteligente para construir un ritmo, ejercicio o lección completa en segundos.",
        },
        {
          number: 2,
          title: "Guarda como preset",
          description: "Organiza tu material en presets limpios. Agrega notas, mapas de tempo y etiquetas de dificultad para tus alumnos.",
        },
        {
          number: 3,
          title: "Envía en tiempo real",
          description: "Con un clic, envía el ejercicio directamente a la app de tu alumno. Lo ve de inmediato y está listo para practicar.",
        },
        {
          number: 4,
          title: "Sigue y mejora",
          description: "Observa cómo llegan los datos de práctica. Da retroalimentación en vivo, ajusta la dificultad y realiza sesiones en línea sincronizadas.",
        },
      ],
    },
    forTeachers: {
      title: "Herramientas potentes para profesores de batería modernos",
      subtitle: "Deja de enviar PDFs. Empieza a enseñar en el momento.",
      highlight: "El tiempo real no es una función — es el fundamento.",
      cta: "Comienza a enseñar hoy",
      capabilities: [
        {
          title: "Entrega de ejercicios en vivo",
          description: "Edita un ejercicio durante la clase y cada alumno conectado recibe la actualización al instante. Perfecto para clases en línea y lecciones privadas.",
        },
        {
          title: "Seguimiento del progreso de alumnos",
          description: "Ve tiempo de práctica, precisión, progreso de tempo y ejercicios completados por cada alumno. Identifica problemas antes de la próxima clase.",
        },
        {
          title: "Sesiones en línea en vivo",
          description: "Imparte clases en vivo — en grupo o individuales — en tiempo real. Todos tocan el mismo material al mismo tiempo con control compartido del metrónomo.",
        },
        {
          title: "Tareas y progreso",
          description: "Asigna tareas y sigue el progreso de los alumnos (hecho / no hecho). Estado claro para cada ejercicio.",
        },
      ],
    },
    pricing: {
      label: "PRECIOS",
      mostPopular: "MÁS POPULAR",
      bestValue: "MEJOR VALOR",
      title: "Precios simples y transparentes",
      subtitle: "Elige el plan que se adapte a tus objetivos. Cambia de plan en cualquier momento.",
      tabs: {
        students: "Para estudiantes",
        teachers: "Para profesores",
      },
      students: {
        free: {
          name: "Gratis",
          price: "$0",
          period: "para siempre",
          description: "Perfecto para explorar la plataforma",
          cta: "Empieza gratis",
          features: [
            "10 ejercicios por día",
            "2 presets guardados",
            "Todos los rudimentos 40+ incluidos",
            "Metrónomo, notación y generador",
            "Unirse a sesiones en vivo",
          ],
        },
        basic: {
          name: "Basic",
          price: "$9",
          period: "",
          description: "Para estudiantes serios",
          cta: "Empieza gratis",
          popular: true,
          features: [
            "Generación ilimitada de ejercicios",
            "Guardar hasta 10 presets",
            "Rudimentos y ejercicios avanzados",
            "Ejercicios autogenerados",
            "Unirse a sesiones en vivo",
          ],
        },
        pro: {
          name: "Pro",
          price: "$19",
          period: "",
          description: "Todo para práctica dedicada",
          cta: "Empieza gratis",
          features: [
            "Todo lo de Basic",
            "Guardar hasta 50 presets",
            "Ejercicios de nivel Pro",
            "Generación avanzada de patrones",
            "Organizar sesiones en vivo",
          ],
        },
      },
      teachers: {
        s: {
          name: "Teacher S",
          price: "$19",
          period: "",
          description: "Hasta 5 alumnos",
          cta: "Empieza gratis",
          features: [
            "Todo lo de Pro",
            "Hasta 5 alumnos",
            "Asignar tareas",
            "Organizar lecciones en vivo",
            "Seguir el progreso de los alumnos",
            "Guardar hasta 50 presets",
          ],
        },
        m: {
          name: "Teacher M",
          price: "$39",
          period: "",
          description: "Hasta 30 alumnos",
          cta: "Empieza gratis",
          popular: true,
          features: [
            "Todo lo de Pro",
            "Hasta 30 alumnos",
            "Asignar tareas",
            "Organizar lecciones en vivo",
            "Seguir el progreso de los alumnos",
            "Guardar hasta 50 presets",
          ],
        },
        l: {
          name: "Teacher L",
          price: "$79",
          period: "",
          description: "Alumnos ilimitados",
          cta: "Empieza gratis",
          features: [
            "Todo lo de Pro",
            "Alumnos ilimitados",
            "Asignar tareas",
            "Organizar lecciones en vivo",
            "Seguir el progreso de los alumnos",
            "Guardar hasta 50 presets",
          ],
        },
      },
      limits: "Comienza gratis — 10 ejercicios por día, no se requiere tarjeta.",
      billedMonthly: "Facturado mensualmente en USD.",
    },
    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Todo lo que necesitas saber sobre GrooveLab.",
      items: [
        {
          question: "¿Pueden los estudiantes usar GrooveLab sin un profesor?",
          answer: "Absolutamente. Muchos estudiantes usan los planes Free y Pro de forma independiente para practicar rudimentos, desarrollar técnica y mantenerse organizados con el generador inteligente y el metrónomo avanzado.",
        },
        {
          question: "¿Cómo funciona realmente la entrega en tiempo real?",
          answer: "Cuando un profesor envía o edita un ejercicio, se envía instantáneamente a través de nuestra infraestructura en tiempo real. La aplicación del alumno se actualiza en tiempo real — sin necesidad de recargar.",
        },
        {
          question: "¿Necesito hardware especial o una aplicación?",
          answer: "GrooveLab funciona en tu navegador en cualquier dispositivo — sin necesidad de instalar nada.",
        },
        {
          question: "¿Puedo cancelar o cambiar de plan en cualquier momento?",
          answer: "Sí. Puedes actualizar, degradar o cancelar en cualquier momento desde la configuración de tu cuenta. Tus datos permanecen seguros y mantienes el acceso hasta el final del período pagado.",
        },
        {
          question: "¿Qué idiomas están soportados?",
          answer: "La interfaz está completamente disponible en inglés, ruso y español. Planeamos agregar más idiomas según la demanda de la comunidad.",
        },
      ],
    },
    footer: {
      tagline: "Herramientas profesionales para bateristas que quieren tocar mejor — y profesores que quieren enseñar mejor.",
      product: "Producto",
      resources: "Recursos",
      company: "Compañía",
      copyright: "© GrooveLab. Todos los derechos reservados.",
      madeFor: "Hecho para músicos a los que les importa el oficio.",
      links: {
        features: "Características",
        pricing: "Precios",
        forTeachers: "Para profesores",
        blog: "Blog",
        docs: "Documentación",
        support: "Soporte",
        about: "Acerca de",
        careers: "Carreras",
        contact: "Contacto",
        privacy: "Privacidad",
        terms: "Términos",
        refund: "Política de reembolsos",
      },
    },
    modal: {
      login: {
        title: "Bienvenido de nuevo",
        subtitle: "Inicia sesión para continuar practicando o enseñando",
        email: "Correo electrónico",
        password: "Contraseña",
        submit: "Iniciar sesión",
        noAccount: "¿No tienes una cuenta?",
        switchToSignup: "Regístrate",
      },
      signup: {
        title: "Crea tu cuenta",
        subtitle: "Únete a miles de bateristas que mejoran cada día",
        name: "Nombre completo",
        email: "Correo electrónico",
        password: "Contraseña",
        role: "Soy",
        roleStudent: "Estudiante",
        roleTeacher: "Profesor",
        submit: "Crear cuenta",
        haveAccount: "¿Ya tienes una cuenta?",
        switchToLogin: "Iniciar sesión",
      },
      demo: {
        title: "Mira GrooveLab en acción",
        subtitle: "Observa cómo profesores y alumnos permanecen perfectamente sincronizados.",
        close: "Cerrar",
        // 4B: disabled Play + localized stub
        play: "Demo próximamente",
        overview: "VISIÓN GENERAL",
        description: "Descubre cómo los profesores envían ejercicios a los alumnos, controlan un metrónomo compartido durante las sesiones en vivo y siguen el progreso de los alumnos (hecho / no hecho).",
      },
    },
    misc: {
      or: "o",
      perMonth: "/mes",
      studentsLabel: "alumnos",
      presets: "presets",
      unlimited: "Ilimitado",
    },
    labels: {
      capabilities: "CAPACIDADES",
      questions: "PREGUNTAS",
      whoItsFor: "PARA QUIÉN",
      dedicatedToEducators: "PARA EDUCADORES",
      simpleWorkflow: "CÓMO FUNCIONA",
      notationEditor: "EDITOR DE NOTACIÓN",
      notationHint: "Toca los pads para escribir notas — como en el editor",
    },
    finalCta: {
      heading: "Dale a tus alumnos un motivo para practicar",
      sub: "Asigna tareas en notación, da clases en vivo y sigue el progreso. Empieza gratis — sin tarjeta.",
      cta: "Empieza gratis",
    },
    consent: {
      banner: "Usamos analítica respetuosa con la privacidad para entender cómo se usa el sitio. Puedes aceptar o rechazar a continuación.",
      accept: "Aceptar",
      decline: "Rechazar",
      privacy: "Política de privacidad",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Restore saved language on mount (SSR default is 'en' in layout)
  useEffect(() => {
    const saved = localStorage.getItem('groovelab-language') as Language | null;
    if (saved && ['en', 'ru', 'es'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  // Keep document.documentElement.lang in sync with current language (reacts to changes, not only mount)
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('groovelab-language', lang);
    // Immediate update for responsiveness on switch; effect above also ensures consistency
    document.documentElement.lang = lang;
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
