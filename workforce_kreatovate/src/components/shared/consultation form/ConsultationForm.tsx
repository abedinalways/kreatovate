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
import ButtonAll from '../ButtonAll';
import { Calendar } from '@/components/ui/calendar';
 // import your Calendar component

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
  onSubmit?: (data: Record<string, any>) => Promise<void>;
  className?: string;
  apiEndpoint?: string;
  successMessage?: string;
  errorMessage?: string;
}

// Default fields
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
    label: 'Which service you want ?',
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
  // Add hidden field for dates
  
];

export function ConsultationForm({
  title = 'Schedule a Free Consultation',
  subtitle,
  fields = defaultFields,
  buttonText = 'Book a consultation',
  showButtonIcon = true,
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
    defaultValues: fields.reduce(
      (acc, f) => ({ ...acc, [f.name]: f.name === 'selectedDates' ? [] : '' }),
      {} as Record<string, any>
    ),
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
                <SelectTrigger>
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
        'w-full max-w-md mx-auto p-8 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-2xl',
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
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          {fields.map(field => renderField(field))}
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
