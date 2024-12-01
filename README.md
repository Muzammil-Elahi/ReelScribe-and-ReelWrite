# **ReelScribe & ReelWrite: AI-Powered IG Reels Transcript & Script Generator**

## 📖 **About the Project**
**ReelScribe & ReelWrite** is an AI-powered tool designed to streamline the workflow for Instagram (IG) content creators. This solution simplifies the process of repurposing Instagram Reels by automating:
1. **Transcription**: Turning video/audio into accurate text.
2. **Rewriting**: Creating polished, engaging scripts using advanced AI models like ChatGPT or Google Gemini.
3. **Script-to-Video Creation**: Generating new AI videos using **Captions.ai**.

With a focus on efficiency and creativity, this tool enables creators to effortlessly generate professional scripts for captions, repurposed content, and fresh video ideas, all in one seamless workflow.

---

## ⚙️ **How It Works**

1. **Input IG Reel URL**: Paste the link to the Instagram Reel into the application.
2. **Video Download**: The tool downloads the video using **Instaloader**.
3. **Transcription**: The video’s audio is converted into text via **Assembly AI**.
4. **Script Rewriting**: AI rewrites the raw transcript into a polished, structured format:
   - **Attention-Grabbing Hook**
   - **Problem Statement**
   - **Solution Presentation**
   - **Detailed Examples**
   - **Call to Action**
5. **AI Video Creation**: The new script is sent to **Captions.ai**, which generates a professional-looking AI video.
6. **Output Delivery**: The tool returns both the rewritten script and the generated video to the user.

---

## 🎯 **Use Cases**

**ReelScribe & ReelWrite** is built for Instagram creators, marketers, and influencers who want to:
- **Repurpose Content**: Turn IG Reels into professional scripts for blogs, YouTube videos, newsletters, or TikTok.
- **Generate Captions**: Effortlessly create engaging captions for social media posts.
- **Draft New Ideas**: Use rewritten scripts as inspiration for new short-form videos or creative campaigns.
- **Save Time**: Automate tedious transcription and rewriting tasks, leaving more time for creative work.

---

## 🚀 **Getting Started**

### **Prerequisites**
To run this project, ensure you have:
- **Python 3.8 or later**
- **API Keys** for:
  - [Assembly AI](https://www.assemblyai.com/)
  - [OpenAI (ChatGPT)](https://platform.openai.com/signup/)
  - [Google Gemini (optional)](https://cloud.google.com/ai/gemini)
  - [Captions.ai](https://captions.ai/)

### **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ReelScribe-ReelWrite.git
   cd ReelScribe-ReelWrite
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file with your API keys:
   ```bash
   ASSEMBLYAI_API_KEY=your_assembly_ai_key
   OPENAI_API_KEY=your_openai_key
   GEMINI_API_KEY=your_google_gemini_key
   CAPTIONS_API_KEY=your_captions_ai_key
   ```

4. Run the application:
   ```bash
   python main.py
   ```

---

## 🛠️ **Key Features**

- **Video Download**: Fetches Instagram Reels using **Instaloader**.
- **Accurate Transcription**: Converts video audio to text via **Assembly AI**.
- **AI-Powered Rewriting**: Polishes transcripts into professional scripts using **ChatGPT** or **Google Gemini**.
- **Video Creation**: Generates AI-powered videos from rewritten scripts via **Captions.ai**.
- **End-to-End Workflow**: Saves the output script to Google Docs for collaboration and reuse.

---

## 🤝 **Contributing**
We welcome contributions to improve **ReelScribe & ReelWrite**! To contribute:
1. Fork the repository.
2. Make your changes.
3. Submit a pull request with a detailed description.

---

## 📝 **License**
This project is licensed under the MIT License. See `LICENSE` for details.
