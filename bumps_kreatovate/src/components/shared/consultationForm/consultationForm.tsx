
'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import ButtonAll from '../buttons/ButtonAll';

export interface FormFieldConfig {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
  gridCol?: 1 | 2;
  validation?: z.ZodType<any, any>;
}

export interface ConsultationFormProps {
  title?: string;
  subtitle?: string;
  fields?: FormFieldConfig[];
  buttonText?: string;
  showButtonIcon?: boolean;
  showDecorator?: boolean;
  onSubmit?: (data: Record<string, any>) => Promise<void>;
  className?: string;
  apiEndpoint?: string;
  successMessage?: string;
  errorMessage?: string;
}

const defaultFields: FormFieldConfig[] = [
  {
    name: 'firstName',
    label: 'First name',
    type: 'text',
    required: true,
    gridCol: 2,
    validation: z.string().min(2),
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    required: true,
    gridCol: 2,
    validation: z.string().min(2),
  },
  {
    name: 'company',
    label: 'Company / Organization',
    type: 'text',
    required: true,
    gridCol: 1,
    validation: z.string().min(2),
  },
  {
    name: 'email',
    label: 'Company email',
    type: 'email',
    required: true,
    gridCol: 1,
    validation: z.string().email(),
  },
  {
    name: 'service',
    label: 'Which service you want?',
    type: 'select',
    required: true,
    gridCol: 1,
    validation: z.string().min(1),
    options: [
      { value: 'digital-marketing', label: 'Digital Marketing' },
      { value: 'seo', label: 'SEO Services' },
      { value: 'social-media', label: 'Social Media Marketing' },
      { value: 'content-creation', label: 'Content Creation' },
      { value: 'web-development', label: 'Web Development' },
      { value: 'consulting', label: 'Business Consulting' },
    ],
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    rows: 4,
    gridCol: 1,
    validation: z.string().optional(),
  },
];

export function ConsultationForm({
  title = 'Schedule a Free Consultation',
  subtitle,
  fields = defaultFields,
  buttonText = 'Book a consultation',
  showButtonIcon = true,
  showDecorator = true,
  onSubmit,
  className = 'text-white',
  apiEndpoint = '/api/consultation',
  successMessage = 'Form submitted successfully!',
  errorMessage = 'Something went wrong. Please try again.',
}: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const createSchema = () => {
    const schemaFields: Record<string, z.ZodType<any, any>> = {};
    fields.forEach(field => {
      if (field.name === 'selectedDates')
        schemaFields[field.name] = z.array(z.string());
      else if (field.validation) schemaFields[field.name] = field.validation;
      else if (field.required)
        schemaFields[field.name] = z
          .string()
          .min(1, `${field.label} is required`);
      else schemaFields[field.name] = z.string().optional();
    });
    return z.object(schemaFields);
  };

  const formSchema = createSchema();
  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...fields.reduce(
        (acc, f) => ({ ...acc, [f.name]: '' }),
        {} as Record<string, any>
      ),
      selectedDates: [],
      timeZone: 'CET',
    },
  });

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) await onSubmit(data);
      else {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to submit form');
      }
      alert(successMessage);
      form.reset();
    } catch (error) {
      console.error(error);
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormFieldConfig) => (
    <FormField
      key={field.name}
      control={form.control}
      name={field.name}
      render={({ field: formField }) => (
        <FormItem>
          <FormLabel>{field.label}</FormLabel>
          <FormControl>
            {field.type === 'textarea' ? (
              <Textarea
                rows={field.rows}
                placeholder={field.placeholder}
                {...formField}
              />
            ) : field.type === 'select' ? (
              <Select
                onValueChange={formField.onChange}
                value={formField.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={field.placeholder || 'Select Option'}
                  />
                </SelectTrigger>
                <SelectContent>
                  {field.options?.map(opt => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : field.name === 'selectedDates' ? (
              <Calendar
                onDatesChange={dates =>
                  form.setValue(
                    'selectedDates',
                    dates.map(d => d.toISOString())
                  )
                }
              />
            ) : (
              <Input
                type={field.type}
                placeholder={field.placeholder}
                {...formField}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div
      className={cn(
        'w-full max-w-md mx-auto p-8 bg-linear-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-2xl',
        className
      )}
    >
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white text-center mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-400 text-center text-sm mt-2">{subtitle}</p>
        )}

        {showDecorator && (
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-1 h-px bg-[linear-gradient(90deg,#E21717_0%,#3700FF_100%)]" />
            <div className="mx-3 shrink-0">
              {/* SVG Decorator */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="24"
                viewBox="0 0 21 24"
                fill="none"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              >
                <path
                  d="M19.889 2.28427C20.403 2.08232 20.656 1.5019 20.4541 0.987863C20.2521 0.473823 19.6717 0.22082 19.1577 0.422764L19.5233 1.35352L19.889 2.28427ZM8.48934 23.199C8.9563 23.4939 9.57391 23.3545 9.86883 22.8875L14.6748 15.2781C14.9697 14.8112 14.8302 14.1935 14.3633 13.8986C13.8963 13.6037 13.2787 13.7432 12.9838 14.2101L8.71184 20.974L1.94793 16.7021C1.48098 16.4072 0.863365 16.5466 0.568449 17.0136C0.273533 17.4805 0.412994 18.0982 0.879945 18.3931L8.48934 23.199ZM19.5233 1.35352L19.1577 0.422764C16.6639 1.40246 13.1689 3.66802 10.6499 7.32361C8.1079 11.0126 6.58337 16.088 8.0479 22.5738L9.02334 22.3535L9.99878 22.1333C8.66331 16.219 10.0554 11.7111 12.2968 8.45843C14.5611 5.17235 17.7161 3.13791 19.889 2.28427L19.5233 1.35352Z"
                  fill="url(#paint0_linear_6334_30867)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_6334_30867"
                    x1="8.47656"
                    y1="11.8535"
                    x2="19.5233"
                    y2="11.8535"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E21717" />
                    <stop offset="1" stopColor="#3700FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex-1 h-px bg-[linear-gradient(90deg,#E21717_0%,#3700FF_100%)]" />
          </div>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          {fields.map(renderField)}
          <ButtonAll
            type="submit"
            btnText={buttonText}
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? 'Submitting...' : buttonText}
            {showButtonIcon && !isSubmitting && (
              <ArrowRight className="w-5 h-5 ml-2" />
            )}
          </ButtonAll>
        </form>
      </Form>
    </div>
  );
}
