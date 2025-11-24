import { FeatureCategory, Algorithm, USP } from './types';

export const NAV_ITEMS = [
  { label: 'Mission', href: '#mission' },
  { label: 'Flagship', href: '#flagship' },
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Pricing', href: '#pricing' },
];

export const USP_DATA: USP[] = [
  {
    title: '"Polo" Routing Engine',
    description: "Unlike competitors locked into one model, we route your prompt to the best engine (e.g., Stability for texture, Veo for motion) seamlessly.",
    icon: "Cpu"
  },
  {
    title: 'Unified Studio Architecture',
    description: "We combine Image, Video, and Audio AI into one timeline. No more switching between 5 different websites.",
    icon: "Layers"
  },
  {
    title: 'Token Flexibility',
    description: "Fair, transparent pay-as-you-go system. Don't lose credits at the end of the month; use them when inspiration strikes.",
    icon: "Coins"
  },
  {
    title: 'Proprietary Filters',
    description: "Our GTA and Anime algorithms are fine-tuned in-house, offering distinct looks you can't get with generic prompting.",
    icon: "Sparkles"
  }
];

export const ALGORITHMS: Algorithm[] = [
  {
    title: "Latent Diffusion Models",
    tech: "Creation Core",
    description: "For generating high-fidelity images from noise, understanding complex semantic relationships in text."
  },
  {
    title: "Temporal Consistency Networks",
    tech: "Video Stability",
    description: "Ensuring that when we generate video, the frames don't 'flicker' or morph weirdly—keeping the subject stable over time."
  },
  {
    title: "Semantic Segmentation",
    tech: "Computer Vision",
    description: "The 'eyes' of our editor. It understands what a 'person', 'car', or 'sky' is, allowing you to click and replace specific parts without manual masking."
  },
  {
    title: "GANs (Generative Adversarial Networks)",
    tech: "Restoration",
    description: "Used for our ultra-fast restoration and face enhancement tools to hallucinate missing details in low-res photos."
  }
];

export const FLAGSHIP_FEATURES = [
  { title: "Multi-Model Image Generator", desc: "Access the best of every AI model in one prompt box." },
  { title: "Cinematic Video Generator", desc: "Text-to-Video that rivals stock footage quality." },
  { title: "Magic Object/BG Remover", desc: "The cleanest automated masking in the industry." },
  { title: "AI Style Transfer (Video)", desc: "Turn your phone footage into an anime/cartoon." },
  { title: "Talking Avatars", desc: "Create a virtual spokesperson in minutes." },
  { title: "4K Upscaler", desc: "Restore and sharpen old media instantly." },
  { title: "Batch Editor", desc: "Edit entire folders of photos with one click." },
  { title: "GTA/Iconic Filters", desc: "Viral-ready artistic transformations." },
  { title: "Auto-Shorts Generator", desc: "Automated viral clipping for social growth." },
  { title: "Ideation Assistant", desc: "An AI co-pilot that helps you write the prompts." },
];

export const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    id: 'cat-a',
    name: 'Generative AI Core',
    items: [
      { title: 'Text-to-Image Synthesis', description: 'Generate photorealistic or stylized images from simple text descriptions.' },
      { title: 'Text-to-Video Cinema', description: 'Create high-definition video clips and b-roll from text prompts.' },
      { title: 'Image-to-Video Motion', description: 'Breathe life into static photos by converting them into dynamic video loops.' },
      { title: 'Concept Art Generator', description: 'Rapidly visualize characters, environments, and assets for game/film pre-production.' },
      { title: 'Logo & Brand Identity Maker', description: 'Generate vector-style logos and brand marks based on company descriptions.' },
      { title: 'Poster & Flyer Creator', description: 'Instantly compose marketing layouts with AI-generated visuals and typography.' },
      { title: 'Anime Character Architect', description: 'Design detailed anime-style characters with specific traits and outfits.' },
      { title: '3D Asset Texture Gen', description: 'Create seamless textures and materials for 3D modeling workflows.' },
      { title: 'Watercolor Painting Gen', description: 'Simulate traditional watercolor art styles digitally.' },
      { title: 'Oil Painting Simulator', description: 'Generate images that mimic the texture and strokes of oil on canvas.' },
      { title: 'Realistic Portrait Studio', description: 'Create non-existent human faces with perfect lighting and skin texture.' },
      { title: 'Mascot Designer', description: 'Generate cute or corporate mascots for brand identity.' },
      { title: 'Scene Generator', description: 'Create detailed background environments for digital art.' },
      { title: 'Character Animation Gen', description: 'Generate sprite sheets or sequences for animated characters.' },
      { title: 'Digital Dance Gen', description: 'Create AI-generated dance sequences from audio beats.' },
    ]
  },
  {
    id: 'cat-b',
    name: 'Advanced AI Editing',
    items: [
      { title: 'Magic Object Remover', description: 'Erase unwanted people or objects; the AI fills the void perfectly.' },
      { title: 'Smart Background Remover', description: 'Instantly isolate subjects with pixel-perfect edge detection.' },
      { title: 'Generative Fill (Inpainting)', description: 'Replace specific parts of an image (e.g., change a shirt, add glasses) via text.' },
      { title: 'Outpainting (Canvas Expansion)', description: 'Extend the borders of any image, generating new cohesive surroundings.' },
      { title: 'Face Restoration', description: 'Recover details in blurry, old, or low-resolution facial photos.' },
      { title: 'Old Photo Colorization', description: 'Automatically add realistic colors to black-and-white historical photos.' },
      { title: 'Lighting Fixer', description: 'Rebalance exposure and remove harsh shadows from poorly lit photos.' },
      { title: 'AI Color Correction', description: 'Apply professional color grading curves automatically.' },
      { title: 'Raw Image Processor', description: 'Specialized pipeline for handling and editing RAW photography formats.' },
      { title: 'Text Cleanup', description: 'Detect and remove text overlays or watermarks from images.' },
      { title: 'Subtitle Remover', description: 'Cleanly erase hardcoded subtitles from video frames.' },
    ]
  },
  {
    id: 'cat-c',
    name: 'Video Post-Production',
    items: [
      { title: 'Video Background Remover', description: 'Remove video backgrounds without a green screen (Rotoscoping).' },
      { title: 'Video Object Eraser', description: 'Remove dynamic objects from moving footage.' },
      { title: 'AI Slow Motion', description: 'Convert standard footage into silky smooth slow motion (Frame Interpolation).' },
      { title: 'Video Upscaler (4K)', description: 'Remaster low-res footage into crisp 4K quality.' },
      { title: 'Video Stabilization', description: 'Smooth out shaky handheld camera movements post-capture.' },
      { title: 'Video Color Grade', description: 'Apply cinematic LUTs and color moods generated by AI.' },
      { title: 'Motion Retargeting', description: 'Transfer body movements from a source video to a target character.' },
      { title: 'Lip-Sync Fixer', description: 'Automatically align audio dubbing with speaker lip movements.' },
      { title: 'Scene Change Detection', description: 'Automatically cut and segment long videos into individual scenes.' },
      { title: 'Auto-Caption Generator', description: 'Transcribe audio and burn in animated subtitles.' },
      { title: 'Speed Ramp Creator', description: 'Automatically generate dynamic speed ramps for action footage.' },
    ]
  },
  {
    id: 'cat-d',
    name: 'Styles & Artistic Filters',
    items: [
      { title: 'AI Style Transfer (Image)', description: 'Apply the artistic style of one image (e.g., Van Gogh) to another.' },
      { title: 'Video Style Transfer', description: 'Transform video footage into animation or painting styles frame-by-frame.' },
      { title: 'GTA Filter', description: 'Turn photos into the iconic, high-contrast video game poster art style.' },
      { title: 'Anime Converter', description: 'Transform real selfies into high-quality anime portraits.' },
      { title: 'Sketch-to-Life', description: 'Convert rough hand-drawn sketches into photorealistic renders.' },
      { title: 'Neon Cyberpunk FX', description: 'Apply glowing neon aesthetics and night-city color palettes.' },
      { title: 'Vintage/Retro VHS', description: 'Simulate 80s/90s tape distortion, glitch, and grain.' },
      { title: 'Pixel Art Converter', description: 'Downsample images into retro 8-bit or 16-bit game sprites.' },
      { title: 'Comic Book Shader', description: 'Convert photos into halftone, cel-shaded comic panels.' },
      { title: 'Manga Shadow FX', description: 'Apply black-and-white manga screening and ink aesthetics.' },
      { title: 'Glitch Art Generator', description: 'Create artistic digital data corruption effects.' },
      { title: 'Vaporwave Aesthetic', description: 'Apply retro-futuristic purple/teal aesthetics.' },
    ]
  },
  {
    id: 'cat-e',
    name: 'Avatars & Digital Personas',
    items: [
      { title: 'Talking Avatar Creator', description: 'Upload a face and audio; the AI animates the face to speak the audio.' },
      { title: '3D Avatar Maker', description: 'Generate full-body 3D-style avatars for virtual worlds.' },
      { title: 'Corporate Headshot Gen', description: 'Turn casual selfies into professional business LinkedIn headshots.' },
      { title: 'Cartoon Avatar Maker', description: 'Create stylized 2D profile pictures for social media.' },
      { title: 'Lip-Sync Avatar', description: 'Precise lip synchronization for virtual characters.' },
    ]
  },
  {
    id: 'cat-f',
    name: 'Social Media Automation',
    items: [
      { title: 'Auto-Shorts Maker', description: 'Turn long horizontal videos into viral vertical Shorts/Reels.' },
      { title: 'TikTok Trend Editor', description: 'Apply trending editing styles and pacing to raw footage.' },
      { title: 'Silence Remover', description: 'Automatically cut out dead air and pauses in talking-head videos.' },
      { title: 'Meme Generator', description: 'Smart templates that auto-fit text to popular meme formats.' },
      { title: 'Sticker Maker', description: 'Isolate subjects and add borders to create chat stickers.' },
      { title: 'Auto-Versioning', description: 'Instantly resize one design into FB, IG, Twitter, and Story formats.' },
      { title: 'Reels Enhancer', description: 'Optimizes video pacing and color for Instagram Reels.' },
      { title: 'Shorts Cut Detection', description: 'Identifies optimal cut points for short-form content.' },
    ]
  },
  {
    id: 'cat-g',
    name: 'Professional Workflow',
    items: [
      { title: 'Batch Editor', description: 'Apply specific edits (e.g., remove BG + watermark) to 500+ images at once.' },
      { title: 'Ideation Assistant', description: 'AI that brainstorms prompts and color palettes based on vague concepts.' },
      { title: 'Multi-Model Render', description: 'Generate results from 3 different AI models simultaneously for comparison.' },
      { title: 'Prompt Enhancer', description: 'Expands 3-word prompts into detailed paragraph-long engineering prompts.' },
      { title: 'Asset Library Cloud', description: 'Unified storage to sync assets between the Image and Video studios.' },
      { title: 'Team Collaboration', description: 'Shared workspaces for teams to edit and comment on assets.' },
      { title: 'Advanced Export', description: 'Smart compression options for WebP, PNG, and MP4.' },
      { title: 'Ultra-Enhance', description: 'Premium upscaling pipeline for large format printing.' },
    ]
  },
  {
    id: 'cat-h',
    name: 'Fun & Entertainment',
    items: [
      { title: 'Cartoonify', description: 'Instantly turn your world into a Saturday morning cartoon.' },
      { title: 'Old Age Filter', description: 'Realistic aging progression for portraits.' },
      { title: 'Baby Filter', description: 'Regression filter to see child versions of faces.' },
      { title: 'Zombie Filter', description: 'Horror-themed transformation for Halloween content.' },
      { title: 'AI Dance Generator', description: 'Make a static photo of a person perform a dance move.' },
      { title: 'Bollywood/Hollywood FX', description: 'Apply cinematic color and lighting tropes from major film industries.' },
      { title: 'Music Beat Sync', description: 'Auto-cut video clips to the beat of an uploaded music track.' },
      { title: 'Face Swap (Fun)', description: 'Swap faces between friends in photos for comedic effect.' },
    ]
  }
];
