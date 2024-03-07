const axios = require('axios');

const sendFile = async (item, ctx) => {
  if (item) {
    try {
      const response = await axios.get(item, { responseType: 'arraybuffer' });
      const fileBuffer = Buffer.from(response.data);

      await ctx.replyWithDocument({ source: fileBuffer, filename: 'your_filename.ext' });
    } catch (e) {
      ctx.replyWithMarkdown(
        `⚠️ ${e.message}\n\n👉 Try manually downloading from [here](${item})\n\n👉 *Maybe This File Is Too Large Or Cannot Accessible From Terabox*`,
      );
    }
  }
};

module.exports = {
  sendFile,
};
