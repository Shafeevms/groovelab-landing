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
    };
    teachers: {
      title: string;
      description: string;
      points: string[];
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
      badge: "For drummers & educators",
      title: "The professional platform for real-time drum education",
      subtitle: "Notation editor, smart rhythm generator, rudiments, advanced metronome with auto-tempo, and live sync between teachers and students. Create once — students receive instantly.",
      ctaPrimary: "Start for free",
      ctaSecondary: "Watch demo",
      ctaTeachers: "For teachers",
      trustNote: "Trusted by 2,400+ drummers and 180+ teachers worldwide",
    },
    forWhom: {
      title: "Built for drummers and teachers",
      subtitle: "Whether you are learning or teaching — GrooveLab adapts to your workflow.",
      students: {
        title: "For students",
        description: "Practice with purpose. Master rudiments, build technique, and receive live feedback from your teacher.",
        points: [
          "Interactive notation editor",
          "Full rudiments & exercises library",
          "Smart generator for personalized practice",
          "Advanced metronome with Auto Tempo Change",
          "Track your progress over time",
        ],
      },
      teachers: {
        title: "For teachers",
        description: "Teach live. Send exercises in real time, monitor progress, and run engaging online sessions.",
        points: [
          "Real-time exercise delivery",
          "Student progress dashboard",
          "Live online lesson sessions",
          "Unlimited presets & phrase permutations",
          "Professional tools for every lesson",
        ],
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
      liveNote: "Changes appear on the student side in under 200ms",
      features: {
        instant: "Instant sync",
        progress: "Progress tracking",
        sessions: "Live sessions",
      },
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
          description: "Save unlimited presets (on paid plans), organize by student, lesson, or difficulty. Fast recall during live teaching.",
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
          description: "Run synchronized group or 1-on-1 sessions. Everyone plays the same material at the same time with shared metronome control.",
        },
        {
          title: "Curriculum Management",
          description: "Build structured learning paths. Assign rudiment series, technique blocks, and repertoire with clear milestones.",
        },
      ],
    },
    pricing: {
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
          cta: "Get started",
          features: [
            "Basic notation editor",
            "Limited rudiments (12)",
            "Basic metronome",
            "5 presets",
            "Community support",
          ],
        },
        basic: {
          name: "Basic",
          price: "$9",
          period: "per month",
          description: "For serious students",
          cta: "Start 14-day trial",
          popular: true,
          features: [
            "Full notation editor",
            "Complete rudiments library",
            "All exercises & permutations",
            "Advanced metronome + Auto Tempo",
            "100 presets",
            "Progress analytics",
            "Priority support",
          ],
        },
        pro: {
          name: "Pro",
          price: "$19",
          period: "per month",
          description: "Everything for dedicated practice",
          cta: "Start 14-day trial",
          features: [
            "Everything in Basic",
            "Unlimited presets",
            "Smart generator (advanced)",
            "Custom exercise creation",
            "Offline mode",
            "Export to PDF / MusicXML",
            "Early access to new features",
          ],
        },
      },
      teachers: {
        s: {
          name: "Teacher S",
          price: "$19",
          period: "per month",
          description: "Up to 5 students",
          cta: "Start teaching",
          features: [
            "Real-time exercise delivery",
            "Student progress dashboard",
            "Live session tools",
            "Unlimited presets",
            "Full editor + generator",
            "Email support",
          ],
        },
        m: {
          name: "Teacher M",
          price: "$39",
          period: "per month",
          description: "Up to 30 students",
          cta: "Start teaching",
          popular: true,
          features: [
            "Everything in Teacher S",
            "Up to 30 active students",
            "Group session mode",
            "Curriculum builder",
            "Detailed analytics per student",
            "Priority support",
          ],
        },
        l: {
          name: "Teacher L",
          price: "$79",
          period: "per month",
          description: "Unlimited students",
          cta: "Start teaching",
          features: [
            "Everything in Teacher M",
            "Unlimited students",
            "Multiple teacher accounts",
            "School / studio management",
            "API access (coming soon)",
            "Dedicated onboarding",
          ],
        },
      },
      limits: "Limits apply to active students and saved presets.",
      billedMonthly: "Billed monthly. Annual plans available with 2 months free.",
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
          answer: "When a teacher sends or edits an exercise, it is pushed instantly through our real-time infrastructure. The student’s app updates in under 200 milliseconds — no refresh needed.",
        },
        {
          question: "Do I need special hardware or an app?",
          answer: "GrooveLab works beautifully in the browser on desktop, tablet, and mobile. We also offer native desktop apps for macOS and Windows with offline support on paid plans.",
        },
        {
          question: "Can I cancel or change plans anytime?",
          answer: "Yes. You can upgrade, downgrade, or cancel at any time from your account settings. Your data remains safe, and you keep access until the end of the paid period.",
        },
        {
          question: "Is there a discount for annual billing?",
          answer: "Yes — annual plans for both students and teachers receive two months free (effectively ~16.7% off). Contact us if you need custom school or studio licensing.",
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
      },
    },
    misc: {
      or: "or",
      perMonth: "/ month",
      studentsLabel: "students",
      presets: "presets",
      unlimited: "Unlimited",
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
      badge: "Для барабанщиков и педагогов",
      title: "Профессиональная платформа для обучения ударным в реальном времени",
      subtitle: "Нотный редактор, умный генератор ритмов, рудименты, продвинутый метроном с автосменой темпа и мгновенная синхронизация между учителем и учеником. Создал — ученик сразу видит.",
      ctaPrimary: "Начать бесплатно",
      ctaSecondary: "Смотреть демо",
      ctaTeachers: "Для учителей",
      trustNote: "Более 2400 барабанщиков и 180 преподавателей уже с нами",
    },
    forWhom: {
      title: "Создано для барабанщиков и преподавателей",
      subtitle: "Учишься ты или преподаёшь — GrooveLab подстраивается под твой процесс.",
      students: {
        title: "Для учеников",
        description: "Практикуйся осознанно. Осваивай рудименты, развивай технику и получай живую обратную связь от преподавателя.",
        points: [
          "Интерактивный нотный редактор",
          "Полная библиотека рудиментов и упражнений",
          "Умный генератор персональных упражнений",
          "Продвинутый метроном с автосменой темпа",
          "Отслеживание прогресса во времени",
        ],
      },
      teachers: {
        title: "Для преподавателей",
        description: "Преподавай вживую. Отправляй упражнения в реальном времени, следи за прогрессом и проводи онлайн-занятия.",
        points: [
          "Мгновенная доставка упражнений",
          "Дашборд прогресса учеников",
          "Инструменты для живых онлайн-уроков",
          "Безлимитные пресеты и пермутации",
          "Профессиональный инструмент для каждого занятия",
        ],
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
      liveNote: "Изменения появляются на стороне ученика менее чем за 200 мс",
      features: {
        instant: "Мгновенная синхронизация",
        progress: "Отслеживание прогресса",
        sessions: "Живые сессии",
      },
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
          description: "Сохраняйте безлимитные пресеты (на платных тарифах), организуйте по ученикам, урокам или уровню сложности. Быстрый доступ во время урока.",
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
          description: "Редактируй упражнение прямо во время урока — все подключённые ученики получают обновление мгновенно. Идеально для онлайн и оффлайн занятий.",
        },
        {
          title: "Отслеживание прогресса учеников",
          description: "Смотри время практики, точность, рост темпа и выполненные упражнения каждого ученика. Видишь проблемы до следующего занятия.",
        },
        {
          title: "Живые онлайн-сессии",
          description: "Проводите синхронизированные групповые или индивидуальные занятия. Все играют один материал одновременно под общим метрономом.",
        },
        {
          title: "Управление учебной программой",
          description: "Создавай структурированные траектории обучения. Назначай серии рудиментов, блоки техники и репертуар с чёткими вехами.",
        },
      ],
    },
    pricing: {
      title: "Простые и прозрачные тарифы",
      subtitle: "Выбери план под свои задачи. Меняй тариф в любой момент.",
      tabs: {
        students: "Для учеников",
        teachers: "Для преподавателей",
      },
      students: {
        free: {
          name: "Бесплатно",
          price: "0 ₽",
          period: "навсегда",
          description: "Отлично для знакомства с платформой",
          cta: "Начать",
          features: [
            "Базовый нотный редактор",
            "Ограниченная библиотека рудиментов (12)",
            "Базовый метроном",
            "5 пресетов",
            "Поддержка сообщества",
          ],
        },
        basic: {
          name: "Basic",
          price: "790 ₽",
          period: "в месяц",
          description: "Для серьёзных учеников",
          cta: "Начать 14-дневный пробный период",
          popular: true,
          features: [
            "Полный нотный редактор",
            "Полная библиотека рудиментов",
            "Все упражнения и пермутации",
            "Продвинутый метроном + Auto Tempo",
            "100 пресетов",
            "Аналитика прогресса",
            "Приоритетная поддержка",
          ],
        },
        pro: {
          name: "Pro",
          price: "1690 ₽",
          period: "в месяц",
          description: "Всё для серьёзной практики",
          cta: "Начать 14-дневный пробный период",
          features: [
            "Всё из Basic",
            "Безлимитные пресеты",
            "Умный генератор (расширенный)",
            "Создание собственных упражнений",
            "Оффлайн-режим",
            "Экспорт в PDF / MusicXML",
            "Ранний доступ к новым функциям",
          ],
        },
      },
      teachers: {
        s: {
          name: "Teacher S",
          price: "1690 ₽",
          period: "в месяц",
          description: "До 5 учеников",
          cta: "Начать преподавать",
          features: [
            "Мгновенная отправка упражнений",
            "Дашборд прогресса учеников",
            "Инструменты живых сессий",
            "Безлимитные пресеты",
            "Полный редактор + генератор",
            "Поддержка по email",
          ],
        },
        m: {
          name: "Teacher M",
          price: "3490 ₽",
          period: "в месяц",
          description: "До 30 учеников",
          cta: "Начать преподавать",
          popular: true,
          features: [
            "Всё из Teacher S",
            "До 30 активных учеников",
            "Режим групповых сессий",
            "Конструктор учебных программ",
            "Детальная аналитика по каждому ученику",
            "Приоритетная поддержка",
          ],
        },
        l: {
          name: "Teacher L",
          price: "6990 ₽",
          period: "в месяц",
          description: "Без ограничения учеников",
          cta: "Начать преподавать",
          features: [
            "Всё из Teacher M",
            "Неограниченное число учеников",
            "Несколько аккаунтов преподавателей",
            "Управление школой / студией",
            "Доступ к API (скоро)",
            "Персональное онбординг",
          ],
        },
      },
      limits: "Лимиты распространяются на активных учеников и сохранённые пресеты.",
      billedMonthly: "Оплата ежемесячно. При годовой оплате — 2 месяца бесплатно.",
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
          answer: "Когда преподаватель отправляет или редактирует упражнение, оно мгновенно передаётся через нашу real-time инфраструктуру. Приложение ученика обновляется менее чем за 200 миллисекунд — без перезагрузки.",
        },
        {
          question: "Нужно ли специальное оборудование или приложение?",
          answer: "GrooveLab отлично работает в браузере на компьютере, планшете и смартфоне. Также есть нативные приложения для macOS и Windows с оффлайн-режимом на платных тарифах.",
        },
        {
          question: "Можно ли отменить или сменить тариф в любой момент?",
          answer: "Да. Ты можешь повысить, понизить или отменить подписку в любой момент в настройках аккаунта. Данные сохраняются, доступ остаётся до конца оплаченного периода.",
        },
        {
          question: "Есть ли скидка при оплате за год?",
          answer: "Да — при годовой оплате и для учеников, и для преподавателей даётся два месяца бесплатно (экономия ~16,7%). Напиши нам, если нужна лицензия для школы или студии.",
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
      },
    },
    misc: {
      or: "или",
      perMonth: "/ мес",
      studentsLabel: "учеников",
      presets: "пресетов",
      unlimited: "Безлимитно",
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
      badge: "Para bateristas y educadores",
      title: "La plataforma profesional para la educación de batería en tiempo real",
      subtitle: "Editor de notación, generador inteligente de ritmos, rudimentos, metrónomo avanzado con cambio automático de tempo y sincronización en vivo entre profesores y alumnos. Crea una vez — los alumnos lo ven al instante.",
      ctaPrimary: "Comenzar gratis",
      ctaSecondary: "Ver demo",
      ctaTeachers: "Para profesores",
      trustNote: "Con la confianza de más de 2.400 bateristas y 180 profesores en todo el mundo",
    },
    forWhom: {
      title: "Creado para bateristas y profesores",
      subtitle: "Ya sea que estés aprendiendo o enseñando, GrooveLab se adapta a tu flujo de trabajo.",
      students: {
        title: "Para estudiantes",
        description: "Practica con propósito. Domina los rudimentos, desarrolla tu técnica y recibe retroalimentación en vivo de tu profesor.",
        points: [
          "Editor de notación interactivo",
          "Biblioteca completa de rudimentos y ejercicios",
          "Generador inteligente para práctica personalizada",
          "Metrónomo avanzado con Auto Tempo Change",
          "Seguimiento de tu progreso a lo largo del tiempo",
        ],
      },
      teachers: {
        title: "Para profesores",
        description: "Enseña en vivo. Envía ejercicios en tiempo real, monitorea el progreso y dirige sesiones en línea atractivas.",
        points: [
          "Entrega de ejercicios en tiempo real",
          "Panel de progreso de estudiantes",
          "Herramientas para lecciones en vivo en línea",
          "Presets ilimitados y permutaciones",
          "Herramientas profesionales para cada clase",
        ],
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
      liveNote: "Los cambios aparecen en el lado del alumno en menos de 200 ms",
      features: {
        instant: "Sincronización instantánea",
        progress: "Seguimiento de progreso",
        sessions: "Sesiones en vivo",
      },
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
          description: "Guarda presets ilimitados (en planes de pago), organiza por alumno, lección o dificultad. Recuperación rápida durante la enseñanza en vivo.",
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
          description: "Dirige sesiones sincronizadas grupales o individuales. Todos tocan el mismo material al mismo tiempo con control compartido del metrónomo.",
        },
        {
          title: "Gestión curricular",
          description: "Construye trayectorias de aprendizaje estructuradas. Asigna series de rudimentos, bloques de técnica y repertorio con hitos claros.",
        },
      ],
    },
    pricing: {
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
          cta: "Comenzar",
          features: [
            "Editor de notación básico",
            "Rudimentos limitados (12)",
            "Metrónomo básico",
            "5 presets",
            "Soporte de la comunidad",
          ],
        },
        basic: {
          name: "Basic",
          price: "$9",
          period: "por mes",
          description: "Para estudiantes serios",
          cta: "Iniciar prueba de 14 días",
          popular: true,
          features: [
            "Editor de notación completo",
            "Biblioteca completa de rudimentos",
            "Todos los ejercicios y permutaciones",
            "Metrónomo avanzado + Auto Tempo",
            "100 presets",
            "Analíticas de progreso",
            "Soporte prioritario",
          ],
        },
        pro: {
          name: "Pro",
          price: "$19",
          period: "por mes",
          description: "Todo para práctica dedicada",
          cta: "Iniciar prueba de 14 días",
          features: [
            "Todo lo de Basic",
            "Presets ilimitados",
            "Generador inteligente (avanzado)",
            "Creación de ejercicios personalizados",
            "Modo sin conexión",
            "Exportar a PDF / MusicXML",
            "Acceso anticipado a nuevas funciones",
          ],
        },
      },
      teachers: {
        s: {
          name: "Teacher S",
          price: "$19",
          period: "por mes",
          description: "Hasta 5 alumnos",
          cta: "Comenzar a enseñar",
          features: [
            "Entrega de ejercicios en tiempo real",
            "Panel de progreso de alumnos",
            "Herramientas de sesiones en vivo",
            "Presets ilimitados",
            "Editor completo + generador",
            "Soporte por email",
          ],
        },
        m: {
          name: "Teacher M",
          price: "$39",
          period: "por mes",
          description: "Hasta 30 alumnos",
          cta: "Comenzar a enseñar",
          popular: true,
          features: [
            "Todo lo de Teacher S",
            "Hasta 30 alumnos activos",
            "Modo de sesiones grupales",
            "Constructor de currículo",
            "Analíticas detalladas por alumno",
            "Soporte prioritario",
          ],
        },
        l: {
          name: "Teacher L",
          price: "$79",
          period: "por mes",
          description: "Alumnos ilimitados",
          cta: "Comenzar a enseñar",
          features: [
            "Todo lo de Teacher M",
            "Alumnos ilimitados",
            "Múltiples cuentas de profesores",
            "Gestión de escuela / estudio",
            "Acceso a API (próximamente)",
            "Onboarding dedicado",
          ],
        },
      },
      limits: "Los límites se aplican a alumnos activos y presets guardados.",
      billedMonthly: "Facturado mensualmente. Planes anuales disponibles con 2 meses gratis.",
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
          answer: "Cuando un profesor envía o edita un ejercicio, se envía instantáneamente a través de nuestra infraestructura en tiempo real. La aplicación del alumno se actualiza en menos de 200 milisegundos — sin necesidad de recargar.",
        },
        {
          question: "¿Necesito hardware especial o una aplicación?",
          answer: "GrooveLab funciona excelente en el navegador en escritorio, tablet y móvil. También ofrecemos aplicaciones nativas de escritorio para macOS y Windows con soporte sin conexión en planes de pago.",
        },
        {
          question: "¿Puedo cancelar o cambiar de plan en cualquier momento?",
          answer: "Sí. Puedes actualizar, degradar o cancelar en cualquier momento desde la configuración de tu cuenta. Tus datos permanecen seguros y mantienes el acceso hasta el final del período pagado.",
        },
        {
          question: "¿Hay descuento por facturación anual?",
          answer: "Sí — los planes anuales tanto para estudiantes como para profesores incluyen dos meses gratis (aprox. 16.7% de descuento). Contáctanos si necesitas licencias personalizadas para escuelas o estudios.",
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
      },
    },
    misc: {
      or: "o",
      perMonth: "/ mes",
      studentsLabel: "alumnos",
      presets: "presets",
      unlimited: "Ilimitado",
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

  useEffect(() => {
    const saved = localStorage.getItem('groovelab-language') as Language | null;
    if (saved && ['en', 'ru', 'es'].includes(saved)) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('groovelab-language', lang);
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
