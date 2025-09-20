import { Card } from "@/components/ui/card"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "jap", name: "Japanese", flag: "🇯🇵" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "sv", name: "Swedish", flag: "🇸🇪" },
  { code: "uk", name: "Ukrainian", flag: "🇺🇦" },
  { code: "ur", name: "Urdu", flag: "🇵🇰" },
]

export function SupportedLanguages() {
  const sortedLanguages = languages.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Global <span className="text-primary">Translation</span> Support
        </h2>
        <p className="text-lg text-muted-foreground mb-4">English → 14 languages</p>
        <p className="text-xl text-muted-foreground mb-12">
          Powered by <span className="text-secondary font-semibold">Helsinki MarianMT</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {sortedLanguages.map((lang) => (
            <Card key={lang.code} className="glass glass-hover p-4 text-center group cursor-pointer hover:text-accent hover:bg-accent transition-colors">
              <div className="text-lg font-mono font-bold mb-2 group-hover:scale-110 transition-transform text-primary">{lang.code}</div>
              <div className="text-sm font-medium group-hover:text-white transition-colors">{lang.name}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
