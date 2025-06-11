
'use client';
import { useLanguage } from '@/contexts/language-context';
import { templeInfo, donationInfo } from '@/lib/data';
import { HandCoins, Banknote, ScanLine, Landmark, Hash, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function DonatePage() {
  const { t } = useLanguage();

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary flex items-center justify-center gap-3">
          <HandCoins className="w-10 h-10" />
          {t('Donate & Support', 'విరాళాలు & మద్దతు')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {t(
            `Your generous contributions help fund the Sri Vijaya Amaleswari Devi Annual Celebrations (22-May-2025 to 31-May-2025), especially the Annadanam on 27-May-2025, and support the temple's activities.`,
            `మీ ఉదారమైన విరాళాలు శ్రీ విజయ అమలేశ్వరి దేవి వార్షిక వేడుకలకు (22-మే-2025 నుండి 31-మే-2025 వరకు), ముఖ్యంగా 27-మే-2025న జరిగే అన్నదానానికి నిధులు సమకూర్చడానికి మరియు ఆలయ కార్యకలాపాలకు మద్దతు ఇవ్వడానికి సహాయపడతాయి.`
          )}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-accent flex items-center gap-2">
              <Banknote className="w-6 h-6" />
              {t('Bank Account Details for Donations', 'విరాళాల కోసం బ్యాంక్ ఖాతా వివరాలు')}
            </CardTitle>
            <CardDescription>
              {t('Contribute directly to the Sri Vijaya Amaleswari Devi Devasthanam Family Trust account.', 'శ్రీ విజయ అమలేశ్వరి దేవి దేవస్థానం ఫ్యామిలీ ట్రస్ట్ ఖాతాకు నేరుగా విరాళం అందించండి.')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <p className="font-semibold text-foreground/90">{t('Account Name:', 'ఖాతా పేరు:')}</p>
              <p className="text-muted-foreground">{t(donationInfo.accountNameEn, donationInfo.accountNameTe)}</p>
            </div>
            <Separator />
            <div>
              <p className="font-semibold text-foreground/90">{t('Bank:', 'బ్యాంక్:')}</p>
              <p className="text-muted-foreground">{t(donationInfo.bankNameEn, donationInfo.bankNameTe)}</p>
            </div>
            <Separator />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-foreground/90">{t('Account Number:', 'ఖాతా సంఖ్య:')}</p>
                <p className="text-muted-foreground">{donationInfo.accountNumber}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground/90">{t('IFSC Code:', 'IFSC కోడ్:')}</p>
                <p className="text-muted-foreground">{donationInfo.ifscCode}</p>
              </div>
            </div>
            <Separator />
             <div>
                <p className="font-semibold text-foreground/90">{t('Branch Code:', 'బ్రాంచ్ కోడ్:')}</p>
                <p className="text-muted-foreground">{donationInfo.branchCode}</p>
              </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-accent flex items-center gap-2">
                <ScanLine className="w-6 h-6" />
                {t('UPI Payments', 'UPI చెల్లింపులు')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-foreground/90">{t('UPI ID:', 'UPI ID:')}</p>
                <p className="text-muted-foreground text-lg font-mono">{donationInfo.upiId}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                <AlertCircle className="inline-block w-4 h-4 mr-1 align-text-bottom" />
                {t(donationInfo.qrNoteEn, donationInfo.qrNoteTe)}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg bg-secondary/30 border-primary/50">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary flex items-center gap-2">
                <Landmark className="w-6 h-6" />
                {t('Annadanam & Arrangements Fund', 'అన్నదానం & ఏర్పాట్ల నిధి')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t(donationInfo.estimatedCostEn, donationInfo.estimatedCostTe)}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(
                  `Your contributions are invaluable for the success of these sacred events.`,
                  `ఈ పవిత్ర కార్యక్రమాల విజయానికి మీ విరాళాలు అమూల్యమైనవి.`
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="mt-12 pt-8 border-t border-border/60 text-center">
        <p className="text-sm text-muted-foreground">
          {t('Issued by: Sri Vijaya Amaleswari Devi Devasthanam Family Trust', 'జారీ చేసినవారు: శ్రీ విజయ అమలేశ్వరి దేవి దేవస్థానం ఫ్యామిలీ ట్రస్ట్')}
        </p>
        <p className="text-xs text-muted-foreground/80 mt-1">
          {t(
            `For any queries regarding donations, please contact the temple office.`,
            `విరాళాలకు సంబంధించి ఏవైనా సందేహాలు ఉంటే, దయచేసి ఆలయ కార్యాలయాన్ని సంప్రదించండి.`
          )} <a href="/contact" className="text-primary hover:underline">{t('Contact Us', 'మమ్మల్ని సంప్రదించండి')}</a>.
        </p>
      </footer>
    </div>
  );
}
