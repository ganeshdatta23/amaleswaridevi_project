'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { templeInfo } from '@/lib/data';
import { useLanguage } from '@/contexts/language-context';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { t } = useLanguage();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // In a real app, you would send this data to a backend API
    console.log(data);
    toast({
      title: t("Message Sent!", "సందేశం పంపబడింది!"),
      description: t("Thank you for contacting us. We will get back to you soon.", "మమ్మల్ని సంప్రదించినందుకు ధన్యవాదాలు. మేము త్వరలో మిమ్మల్ని సంప్రదిస్తాము."),
    });
    form.reset();
  };

  return (
    <div className="container py-12 md:py-16 animate-fade-in">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">
          {t('Contact Us', 'మమ్మల్ని సంప్రదించండి')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('We are here to assist you. Reach out with any queries or for more information.', 'మేము మీకు సహాయం చేయడానికి ఇక్కడ ఉన్నాము. ఏవైనా ప్రశ్నలతో లేదా మరింత సమాచారం కోసం సంప్రదించండి.')}
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline text-accent">
                <MapPin className="w-5 h-5" /> {t('Visit Us', 'మమ్మల్ని సందర్శించండి')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <p>{t(templeInfo.contact.addressEn, templeInfo.contact.addressTe)}</p>
              <Button variant="link" asChild className="px-0 mt-2 text-primary hover:text-accent">
                <a href="/map">{t('Get Directions', 'మార్గదర్శకాలు పొందండి')}</a>
              </Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline text-accent">
                <Phone className="w-5 h-5" /> {t('Call Us', 'మాకు కాల్ చేయండి')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <a href={`tel:${templeInfo.contact.phone}`} className="hover:text-primary">{templeInfo.contact.phone}</a>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline text-accent">
                <Mail className="w-5 h-5" /> {t('Email Us', 'మాకు ఇమెయిల్ చేయండి')}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <a href={`mailto:${templeInfo.contact.email}`} className="hover:text-primary">{templeInfo.contact.email}</a>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-accent">{t('Send us a Message', 'మాకు సందేశం పంపండి')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('Full Name', 'పూర్తి పేరు')}</Label>
                  <Input id="name" {...form.register("name")} placeholder={t('Your Name', 'మీ పేరు')} />
                  {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
                </div>
                <div>
                  <Label htmlFor="email">{t('Email Address', 'ఇమెయిల్ చిరునామా')}</Label>
                  <Input id="email" type="email" {...form.register("email")} placeholder={t('your.email@example.com', 'your.email@example.com')} />
                  {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
                </div>
                <div>
                  <Label htmlFor="subject">{t('Subject', 'విషయం')}</Label>
                  <Input id="subject" {...form.register("subject")} placeholder={t('Regarding...', 'గురించి...')} />
                  {form.formState.errors.subject && <p className="text-sm text-destructive mt-1">{form.formState.errors.subject.message}</p>}
                </div>
                <div>
                  <Label htmlFor="message">{t('Message', 'సందేశం')}</Label>
                  <Textarea id="message" {...form.register("message")} placeholder={t('Your message here...', 'మీ సందేశాన్ని ఇక్కడ వ్రాయండి...')} rows={5} />
                  {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
                </div>
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    t('Sending...', 'పంపుతోంది...')
                  ) : (
                    <>
                     <Send className="w-4 h-4 mr-2" /> {t('Send Message', 'సందేశం పంపండి')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
