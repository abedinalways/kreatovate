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
import { Button } from '@/components/ui/button';

// Field Configuration Types
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
  showDecorator?: boolean;
  apiEndpoint?: string;
  successMessage?: string;
  errorMessage?: string;
}

// Default Fields Configuration
const defaultFields: FormFieldConfig[] = [
  {
    name: 'firstName',
    label: 'First name',
    type: 'text',
    required: true,
    gridCol: 2,
    validation: z.string().min(2, 'First name must be at least 2 characters'),
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    required: true,
    gridCol: 2,
    validation: z.string().min(2, 'Last name must be at least 2 characters'),
  },
  {
    name: 'company',
    label: 'Company / Organization',
    type: 'text',
    required: true,
    gridCol: 1,
    validation: z.string().min(2, 'Company name is required'),
  },
  {
    name: 'email',
    label: 'Company email',
    type: 'email',
    required: true,
    gridCol: 1,
    validation: z.string().email('Please enter a valid email'),
  },
  {
    name: 'service',
    label: 'Which service you want ?',
    type: 'select',
    required: true,
    gridCol: 1,
    validation: z.string().min(1, 'Please select a service'),
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
    placeholder: 'To better assist you, please describe how we can help...',
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
  onSubmit,
  className = 'text-white',
  showDecorator = true,
  apiEndpoint = '/api/consultation',
  successMessage = 'Form submitted successfully!',
  errorMessage = 'Something went wrong. Please try again.',
}: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // Create dynamic schema from fields
  const createSchema = () => {
    const schemaFields: Record<string, z.ZodType<any, any>> = {};

    fields.forEach(field => {
      if (field.validation) {
        schemaFields[field.name] = field.validation;
      } else if (field.required) {
        if (field.type === 'email') {
          schemaFields[field.name] = z
            .string()
            .email('Please enter a valid email');
        } else {
          schemaFields[field.name] = z
            .string()
            .min(1, `${field.label} is required`);
        }
      } else {
        schemaFields[field.name] = z.string().optional();
      }
    });

    return z.object(schemaFields);
  };

  const formSchema = createSchema();
  type FormValues = z.infer<typeof formSchema>;

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {} as Record<string, string>),
  });

  // Handle form submission
  const handleSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
      }

      alert(successMessage);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render individual field
  const renderField = (field: FormFieldConfig) => {
    return (
      <FormField
        key={field.name}
        control={form.control}
        name={field.name}
        render={({ field: formField }) => (
          <FormItem>
            <FormLabel>
              {field.label}
              {field.required && <span className="text-red-500 ml-1"></span>}
            </FormLabel>
            <FormControl>
              {field.type === 'textarea' ? (
                <Textarea
                  placeholder={field.placeholder}
                  rows={field.rows}
                  className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                  {...formField}
                />
              ) : field.type === 'select' ? (
                <Select
                  onValueChange={formField.onChange}
                  value={formField.value}
                >
                  <SelectTrigger className="bg-transparent border-gray-600 text-white focus:border-purple-500">
                    <SelectValue
                      placeholder={field.placeholder || 'Select Option'}
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a0b2e] border-gray-600">
                    {field.options?.map(option => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="bg-transparent border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-500"
                  {...formField}
                />
              )}
            </FormControl>
            <FormMessage className="text-red-400 text-xs" />
          </FormItem>
        )}
      />
    );
  };

  // Group fields by gridCol
  const groupedFields: FormFieldConfig[][] = [];
  let currentGroup: FormFieldConfig[] = [];

  fields.forEach(field => {
    if (field.gridCol === 1) {
      if (currentGroup.length > 0) {
        groupedFields.push(currentGroup);
        currentGroup = [];
      }
      groupedFields.push([field]);
    } else {
      currentGroup.push(field);
      if (currentGroup.length === 2) {
        groupedFields.push(currentGroup);
        currentGroup = [];
      }
    }
  });

  if (currentGroup.length > 0) {
    groupedFields.push(currentGroup);
  }

  return (
    <div
      className={cn(
        'w-full max-w-md mx-auto p-8 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f1419] rounded-2xl border border-purple-500/30 shadow-2xl',
        className
      )}
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="text-gray-400 text-center text-sm mt-2">{subtitle}</p>
        )}
        {showDecorator && (
          <div className="relative h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mt-4"></div>
        )}
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
          {groupedFields.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={cn(
                group.length === 2 ? 'grid grid-cols-2 gap-4' : 'block'
              )}
            >
              {group.map(field => renderField(field))}
            </div>
          ))}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white"
          >
            {isSubmitting ? 'Submitting...' : buttonText}
            {showButtonIcon && !isSubmitting && (
              <ArrowRight className="w-5 h-5 ml-2" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
