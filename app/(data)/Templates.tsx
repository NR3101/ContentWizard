export default [
  {
    name: "Write Email",
    desc: "This AI-powered Email writer helps you craft professional, engaging, and context-appropriate emails for various business and personal situations.",
    icon: "https://cdn-icons-png.flaticon.com/128/4185/4185808.png",
    category: "Email",
    slug: "email-write",
    aiPrompt:
      "Based on the provided topic, write a professional email that is clear, concise, and appropriate for the context. Include a subject line, greeting, body, and closing. Consider the tone, purpose, and potential recipient of the email. Format the output in rich text editor format.",
    form: [
      {
        label: "Email Topic",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Rewrite your email",
    desc: "This AI-powered Email rewriter enhances your existing emails, improving grammar, clarity, and professionalism while maintaining your original message and intent.",
    icon: "https://cdn-icons-png.flaticon.com/128/6125/6125875.png",
    category: "Email",
    slug: "email-rewriter",
    aiPrompt:
      "Rewrite the provided email body, correcting any grammar issues and enhancing its professionalism. Maintain the original message and intent while improving clarity and structure. Consider the context and purpose of the email. Provide the output in rich text editor format, including any necessary formatting such as paragraphs, bullet points, or numbered lists.",
    form: [
      {
        label: "Your Email",
        field: "textarea",
        name: "email-body",
        required: true,
      },
    ],
  },
  {
    name: "Blog Title",
    desc: "An AI Tool that generates compelling, SEO-friendly blog titles tailored to your specific niche and content outline, designed to capture reader attention and improve click-through rates.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Generate 5 SEO-optimized and engaging blog title ideas along with their outlines based on the provided niche/topic.Outline Requirements:Create an outline with bullet points and very short and brief descriptions.Title Requirements:Generate 5 concise, captivating titles relevant to the outline.Use power words, numbers, or questions for added appeal.Format Results:Present titles and outlines in bullet points with Rich Text Editor formatting.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche or topic",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter the outline of your blog (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generates well-structured, informative, and engaging blog posts tailored to your topic and outline, incorporating SEO best practices and maintaining a consistent tone throughout the content.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate a comprehensive blog post based on the provided topic and outline. Ensure the content is well-structured, informative, and engaging. Include an introduction, main body with subheadings as per the outline, and a conclusion. Incorporate relevant examples, statistics, or quotes if appropriate. Maintain a consistent tone throughout the post and optimize for SEO by naturally including the topic keywords. Format the output in rich text editor format.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generates diverse, trending, and relevant blog topic ideas based on your niche, helping content creators overcome writer's block and stay ahead of industry trends.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet points only, without descriptions. Consider current trends, frequently asked questions, and potential pain points of the target audience. Aim for a mix of evergreen content and timely topics. Ensure each topic is concise yet descriptive enough to convey the main idea. Format the output in rich text editor format.",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that creates highly optimized, click-worthy YouTube video titles, incorporating SEO best practices to improve visibility and attract more viewers to your content.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Generate the Best SEO optimized high ranked 5 title ideas in bullet points only, based on keywords and outline. Consider using numbers, power words, or questions to increase click-through rates. Ensure titles are within the 60-character limit for optimal display. Include the main keyword naturally in each title. Provide the result in HTML tags format.",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that crafts compelling, SEO-friendly YouTube video descriptions, complete with relevant emojis, to boost engagement, provide value to viewers, and improve video discoverability.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate a YouTube description with emojis, limited to 4-5 lines, based on the provided topic and outline. The description should be engaging, informative, and optimized for search. Include relevant keywords naturally. Use emojis to enhance readability and attract attention, but don't overuse them. Include a call-to-action (e.g., like, subscribe, comment) and any relevant links or timestamps. Format the output in rich text editor format.",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that generates relevant, high-performing YouTube tags to improve your video's searchability and reach, based on your video title and content outline.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 YouTube tags in bullet points based on the title and outline. Include a mix of broad and specific keywords related to the video content. Use variations of the main topic and related themes. Ensure tags are within the 500-character total limit. Format the output in rich text editor format.",
    form: [
      {
        label: "Enter your youtube video title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Articles or Blog Posts, creating unique content that can bypass AI detectors and is plagiarism-free, while maintaining the original message and improving readability.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite the given article without any Plagiarism. Maintain the original message and key points while improving sentence structure, vocabulary, and overall flow. Ensure the rewritten content is coherent, engaging, and tailored for the intended audience. Use synonyms, rephrase sentences, and reorganize paragraphs as needed. Provide the output in rich text editor format.",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers comprehensive tone analysis and suggests better word choices to enhance overall impact and clarity.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given the textToImprove, rewrite the text without any grammar mistakes and enhance it professionally. Improve clarity, conciseness, and word choice while maintaining the original message. Consider the context and intended audience when making improvements. Provide the output in rich text editor format.",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that intelligently incorporates relevant emojis into your text, enhancing emotional expression and engagement in digital communication across various platforms.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add appropriate Emojis to the outline text based on its content and context. Rewrite the text if necessary to incorporate emojis smoothly. Ensure a balanced and professional appearance, avoiding overuse of emojis. Provide the result in rich text editor format.",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that creates engaging, trend-aware Instagram posts optimized for maximum engagement, generating captions that resonate with your audience and align with your brand voice.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram posts based on the given keywords. Each post should be engaging, concise, and optimized for Instagram's platform. Include relevant hashtags and emojis where appropriate. Consider current trends and best practices for Instagram captions. Provide the output in rich text editor format.",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that generates relevant, trending, and niche-specific Instagram hashtags to increase your post's visibility and reach the right audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hashtags based on the given keywords. Include a mix of popular, niche-specific, and trending hashtags relevant to the content. Ensure the hashtags are diverse and cover different aspects of the topic. Provide the output in rich text editor format.",
    form: [
      {
        label: "Enter Keywords for your Instagram hashtag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generates new and trending Instagram post and reel ideas tailored to your niche, helping you create engaging content that resonates with your audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram ideas based on the given niche, incorporating the latest trends. Include a mix of post and reel ideas that are engaging, visually appealing, and likely to encourage interaction. Consider current Instagram features and best practices. Provide the output in rich text editor format.",
    form: [
      {
        label: "Enter Keywords / Niche for your Instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to correct your English grammar by analyzing the provided text, offering improvements in spelling, punctuation, and sentence structure.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",
    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammar, spelling, and punctuation. Improve sentence structure and word choice where necessary, while maintaining the original meaning. Provide explanations for major corrections if needed. Give the output in rich text editor format.",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate efficient, clean, and well-commented programming code in any language based on your requirements and specifications.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",
    slug: "write-code",
    aiPrompt:
      "Based on the user's codeDescription, write efficient and well-structured code. Include comments to explain complex parts. Consider best practices and conventions for the specified programming language. Provide the output in rich text editor format within a code block.",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to provide detailed, line-by-line explanations of programming code in any language, helping users understand complex algorithms and coding concepts.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",
    slug: "explain-code",
    aiPrompt:
      "Analyze the provided code and explain it line by line. Break down complex concepts, clarify the purpose of each section, and highlight any best practices or potential improvements. Provide the explanation in rich text editor format, using code blocks where necessary to reference specific parts of the code.",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",
    slug: "code-bug-detector",
    aiPrompt:
      "Analyze the user's codeInput to identify potential bugs or errors. Provide a detailed explanation of each issue found, including the line number and the nature of the problem. Suggest fixes or improvements for each bug identified. If no bugs are found, offer suggestions for code optimization or best practices. Present the analysis and solutions in rich text editor format, using code blocks where necessary.",
    form: [
      {
        label: "Enter code for which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "An AI-powered tool that creates catchy, memorable taglines for your brand or product, capturing its essence and appeal in a concise phrase.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",
    slug: "tagline-generator",
    aiPrompt:
      "Based on the provided productName and outline, generate 5-10 catchy taglines for the business product. Each tagline should be concise, memorable, and reflect the key benefits or unique selling points of the product. Consider the target audience and brand voice. Provide the output in rich text editor format.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This AI-powered SEO expert creates captivating and keyword-rich e-commerce product descriptions to boost your online sales and improve product visibility.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",
    slug: "product-description",
    aiPrompt:
      "Based on the provided productName and description, generate a compelling product description for e-commerce. The description should highlight key features and benefits, incorporate relevant keywords for SEO, and be tailored to the target audience. Use persuasive language to encourage purchases. Keep the description concise yet informative. Provide the output in rich text editor format.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];
