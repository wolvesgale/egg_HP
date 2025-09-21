async function handler({ prompt }) {
  if (!prompt) {
    return { error: "Prompt is required" };
  }

  try {
    const response = await fetch("https://api.ideogram.ai/generate", {
      method: "POST",
      headers: {
        "Api-Key": process.env.IDEOGRAM_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image_request: {
          prompt,
          aspect_ratio: "ASPECT_10_16",
          model: "V_2",
          magic_prompt: "AUTO",
        },
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      return { error: `Ideogram API error: ${error}` };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Failed to generate image" };
  }
}

function MainComponent() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedImage, setGeneratedImage] = useState(null);

  const generateImage = async () => {
    if (!prompt) {
      setError("プロンプトを入力してください");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setGeneratedImage(data.image_url);
    } catch (err) {
      setError("画像の生成中にエラーが発生しました");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5]">
      <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-[#D4A5A5] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#FFE5E5]" />
              </div>
            </div>
            <h1 className="text-2xl font-cormorant text-[#D4A5A5]">
              株式会社egg
            </h1>
          </a>
        </div>
      </header>

      <main className="pt-24 md:pt-32">
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-cormorant text-[#9E7676] text-center mb-8">
            画像生成
          </h2>
          <p className="text-xl font-crimson-text text-[#615555] text-center max-w-3xl mx-auto mb-16">
            プロンプトを入力して、AIで画像を生成できます
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="画像の説明を入力してください..."
                  className="w-full p-3 border border-[#D4A5A5] rounded-lg focus:outline-none focus:border-[#9E7676] min-h-[100px]"
                />
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg">
                  {error}
                </div>
              )}

              <button
                onClick={generateImage}
                disabled={loading}
                className="w-full bg-[#D4A5A5] text-white py-3 rounded-lg hover:bg-[#9E7676] transition-colors font-cormorant text-lg disabled:opacity-50"
              >
                {loading ? "生成中..." : "画像を生成"}
              </button>

              {generatedImage && (
                <div className="mt-8">
                  <img
                    src={generatedImage}
                    alt="生成された画像"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#FDF8F5] py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="font-crimson-text text-[#9E7676]">
            © 2025 株式会社egg. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
export async function POST(request) {
  return handler(await request.json());
}