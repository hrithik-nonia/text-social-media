import "../customCss/faq.css";
const Faq = ({ onClose }) => {
  return (
    <>
      <div onClick={onClose} className="faqContentDiv">
        <div onClick={(e) => e.stopPropagation()} className="faqContant">
          <button onClick={onClose} className="faqConBtn">
            ✕
          </button>
          <h4 className="fw-bold mb-3">FAQs</h4>
          <p>
            🔐 Account / Login Q: How do I create an account on Socialify?
            A:Simply click the "Sign-up" button, enter your email and password,
            and you're in. No phone number required. Q: I forgot my password.
            What should I do? A: Click "Login" → "Forgot Password" and we'll
            send a reset link to your registered email. Q: Can I change my
            username after signing up? A: Yes, you can update your username
            anytime from your profile settings. ✍️ Posting / Features Q: What
            kind of content can I post on Socialify? A: Socialify is a text-only
            platform. You can share thoughts, opinions, stories, and ideas — no
            images or videos. Q: Is there a character limit for posts? A: Yes,
            each post can be up to 500 characters — short, sharp, and to the
            point. Q: Can I edit or delete my post after publishing? A: Yes, you
            can edit or delete your posts anytime from your profile. 🔒 Privacy
            & Data Q: Does Socialify sell my personal data? A: Never. We do not
            sell, rent, or share your personal data with third parties. Q: Who
            can see my posts? A: By default, your posts are public. You can
            switch to a private account from settings. Q: How do I delete my
            account? A: Go to Settings → Account → Delete Account. This action
            is permanent and cannot be undone. 🤝 Community Guidelines Q: What
            kind of content is not allowed? A: Hate speech, harassment, spam,
            and misinformation are strictly prohibited on Socialify. Q: How do I
            report a post or user? A: Click the tee dots on any post or profile
            and select "Report." Our team reviews all reports within 24 hours.
            Q: What happens if I violate community guidelines? A: Depending on
            the severity, your post may be removed or your account may be
            suspended or permanently banned.
          </p>
        </div>
      </div>
    </>
  );
};
export default Faq;
