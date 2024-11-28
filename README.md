# ReelScribe & ReelWrite: AI-Powered IG Reel Transcript & Rewriting Tool

## 📖 About the Project
ReelScribe & ReelWrite is a tool built for content creators looking to unlock the full potential of Instagram Reels. By automating the process of transcribing and rewriting, ReelScribe & ReelWrite allows creators to effortlessly generate polished scripts for repurposing content, creating captions, or crafting new video ideas. 

Using **Instaloader**, **Assembly AI**, and **ChatGPT**, this tool provides an end-to-end solution for transforming IG Reels into optimized, professional scripts, saved directly into Google Docs for easy editing and sharing.

---

## ⚙️ How It Works

1. **Input the URL of the IG Reel**:  
   Paste the URL of the Instagram Reel into the application.

2. **Download the Video**:  
   The tool uses **Instaloader** to fetch and download the video from Instagram.

3. **Generate a Transcript**:  
   The downloaded video is processed using **Assembly AI**, which generates an accurate transcript of the content.

4. **Rewrite the Transcript**:  
   Using **ChatGPT**, the raw transcript is rephrased into an engaging, professionally written script following this predefined format:
   - **Hook**
   - **Describe the Problem**
   - **Present the Solution**
   - **Provide Examples or More Details**
   - **Call to Action**

5. **Save the Script to Google Docs**:  
   The rewritten script is automatically exported to Google Docs for easy access, collaboration, and future use.

---

## 🎯 Use Case for Content Creators

ReelScribe & ReelWrite is designed to streamline the content creation process, helping creators focus on creativity instead of getting bogged down in manual tasks. Here's how ReelScribe & ReelWrite can help:

- **Repurpose Content**: Transform IG Reels into professionally written scripts for other platforms like blogs, YouTube videos, or newsletters.
- **Generate Captions**: Quickly create engaging captions or hashtags based on the transcript.
- **Create New Scripts**: Use the rewritten content as a base to generate new scripts for short-form videos or other formats.
- **Save Time**: Eliminate the manual effort of transcription and rewriting, leaving more room for creative innovation.

---

## 🚀 Getting Started

### Prerequisites
To run ReelScribe & ReelWrite, you’ll need:
- Python 3.8 or above
- API Keys for:
  - [Assembly AI](https://www.assemblyai.com/)
  - [OpenAI (ChatGPT)](https://platform.openai.com/signup/)
  - [Google API for Google Docs](https://console.cloud.google.com/)
- Install dependencies using:
  ```bash
  pip install instaloader openai google-api-python-client assemblyai
  ```

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ReelScribe & ReelWrite.git
   cd ReelScribe & ReelWrite
   ```

2. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up your `.env` file with the following information:
   ```
   ASSEMBLYAI_API_KEY=your_assemblyai_api_key
   OPENAI_API_KEY=your_openai_api_key
   GOOGLE_API_KEY=your_google_api_key
   ```

---

## 🖥️ Usage

1. Run the script:
   ```bash
   python main.py
   ```

2. Paste the Instagram Reel URL when prompted.

3. The script will:
   - Download the video.
   - Transcribe it using Assembly AI.
   - Rewrite the transcript using ChatGPT.
   - Save the rewritten transcript to Google Docs.

4. Open your Google Doc to review and edit the output.

---

## 🛠️ Tools and Technologies

- **Instaloader**: For downloading Instagram Reel videos.
- **Assembly AI**: For generating video transcripts.
- **OpenAI ChatGPT**: For rewriting the transcript into a professional script.
- **Google Docs API**: For saving the final script directly to Google Docs.

---

## 🤝 Contributing

We welcome contributions to improve ReelScribe & ReelWrite! To contribute:
- Fork the repository.
- Make your changes.
- Submit a pull request.

---

## 📝 License

This project is licensed under the MIT License.

---

## 📬 Contact

For questions, suggestions, or issues, feel free to reach out at [your-email@example.com].

---

You can copy-paste this into your `README.md` file as is. Let me know if you’d like to add or adjust anything!
