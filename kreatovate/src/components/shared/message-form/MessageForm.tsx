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
import ButtonOne from '../buttons/ButtonOne';

export interface FormFieldConfig {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
  gridCol?: 1 | 2;
  validation?: z.ZodType<any, any>;
}

export interface ConsultationFormProps {
  title?: string;
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

// ✅ Updated fields with Phone Number
const defaultFields: FormFieldConfig[] = [
  {
    name: 'fullName',
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true,
    validation: z.string().min(2, 'Full name is required'),
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
    validation: z.string().email('Invalid email address'),
  },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'tel',
    placeholder: 'Enter your number',
    required: true,
    validation: z.string().min(6, 'Phone number is required'),
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Type your message...',
    rows: 4,
    required: true,
    validation: z.string().min(5, 'Message is required'),
  },
];

export default function MessageForm({
  title = 'Send Us a Message',
  fields = defaultFields,
  buttonText = 'Send Message',
  showButtonIcon = true,
  onSubmit,
  className,
  apiEndpoint = '/api/consultation',
  successMessage = 'Form submitted successfully!',
  errorMessage = 'Something went wrong. Please try again.',
}: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // 🔒 Build Zod Schema
  const formSchema = z.object(
    fields.reduce(
      (acc, field) => ({
        ...acc,
        [field.name]: field.validation || z.string().optional(),
      }),
      {}
    )
  );

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: fields.reduce(
      (acc, f) => ({ ...acc, [f.name]: '' }),
      {} as Record<string, any>
    ),
  });

  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      if (onSubmit) await onSubmit(data);
      else {
        const res = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Failed to submit form');
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
          <FormLabel className="text-sm font-medium text-gray-200">
            {field.label}
            {field.required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            {field.type === 'textarea' ? (
              <Textarea
                rows={field.rows}
                placeholder={field.placeholder}
                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 backdrop-blur-md"
                {...formField}
              />
            ) : (
              <Input
                type={field.type}
                placeholder={field.placeholder}
                className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 backdrop-blur-md"
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
        'w-full max-w-md mx-auto p-8 rounded-2xl border-2 border-gray-400 bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
        'text-white md:w-92 opacity-80',
        className
      )}
    >
      <h2 className="text-xl font-semibold text-white mb-6 text-center">
        {title}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          {fields.map(renderField)}

          <button
            type="submit"
            disabled={isSubmitting}
            className=" mt-4 bg-gradient-to-r from-pink-500 to-indigo-500 hover:opacity-90 text-white font-medium py-3 rounded-lg flex items-center justify-center transition-all duration-300 w-40"
          >
            {isSubmitting ? 'Submitting...' : buttonText}
            {showButtonIcon && !isSubmitting && (
              <ArrowRight className="w-5 h-5 ml-2" />
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
