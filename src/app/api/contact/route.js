import { Resend } from "resend";

// 送信元: Resendで eggs.email ドメインを検証した後、
// "noreply@eggs.email" 等のアドレスに変更してください。
const TO_EMAIL = "info@eggs.email";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "必須項目が不足しています" },
        { status: 400 }
      );
    }

    // APIキーはリクエスト時に読み込む（ビルド時エラーを防ぐ）
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { success: false, error: "メールサービスが設定されていません" },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

    await resend.emails.send({
      from: fromEmail,
      to: TO_EMAIL,
      replyTo: email,
      subject: `【HP問い合わせ】_${name}`,
      text: `名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #9E7676;">HPよりお問い合わせ</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; width: 140px; color: #9E7676; font-weight: bold;">名前</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; color: #9E7676; font-weight: bold;">Email</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #eee; color: #9E7676; font-weight: bold; vertical-align: top;">メッセージ</td>
              <td style="padding: 8px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json(
      { success: false, error: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
