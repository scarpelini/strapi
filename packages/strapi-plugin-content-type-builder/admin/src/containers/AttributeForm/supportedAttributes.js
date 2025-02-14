const attributes = {
  boolean: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          title: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          label: {
            id:
              'content-type-builder.form.attribute.settings.default.checkboxLabel',
          },
          name: 'default',
          type: 'checkbox',
          value: false,
          validations: {},
        },
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ],
    },
  },
  date: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          label: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          name: 'default',
          type: 'date',
          value: '',
          validations: {},
        },
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ],
    },
  },
  email: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          label: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          name: 'default',
          type: 'email',
          value: '',
          validations: {},
        },
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.minimumLength',
          },
          name: 'minLength',
          custom: true,
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: { required: true },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.maximumLength',
          },
          name: 'maxLength',
          type: 'checkbox',
          custom: true,
          value: false,
          validations: { required: true },
        },
      ],
    },
  },
  enumeration: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.enumeration.name',
          },
          name: 'name',
          type: 'string',
          value: '',
          validations: {
            required: true,
          },
        },
        {
          customBootstrapClass: 'col-md-8',
          label: {
            id: 'content-type-builder.form.attribute.item.enumeration.rules',
          },
          name: 'enum',
          type: 'textarea',
          placeholder:
            'content-type-builder.form.attribute.item.enumeration.placeholder',
          value: false,
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: data => {
      const options = data.enum ? data.enum.split('\n') : [];
      const items = [
        {
          customBootstrapClass: 'col-md-7',
          label: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          name: 'enumDefault',
          type: 'select',
          value: '',
          selectOptions: options,
          validations: {},
        },
        {
          customBootstrapClass: 'col-md-7',
          label: {
            id: 'content-type-builder.form.attribute.item.enumeration.graphql',
          },
          name: 'enumName',
          type: 'string',
          value: '',
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.enumeration.graphql.description',
          },
        },
        {
          customBootstrapClass: 'col-md-12',
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ];

      return { items };
    },
  },
  group: {
    base: {
      items: [
        {
          custom: true,
          label: {
            id: 'content-type-builder.form.attribute.item.group.label.select',
          },
          name: 'group',
          type: 'select',
          value: '',
          placeholder:
            'content-type-builder.form.attribute.item.group.placeholder.select',
          selectOptions: [],
          validations: {
            required: true,
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.group.label.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          placeholder:
            'content-type-builder.form.attribute.item.group.placeholder.name',
          validations: {
            required: true,
          },
        },
        {
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.repeatable',
          },
          name: 'repeatable',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.repeatable.description',
          },
        },
      ],
    },
    advanced: data => {
      const requiredField = {
        customBootstrapClass: 'col-md-12',
        label: {
          id: 'content-type-builder.form.attribute.item.requiredField',
        },
        name: 'required',
        type: 'checkbox',
        value: false,
        validations: {},
        inputDescription: {
          id:
            'content-type-builder.form.attribute.item.requiredField.description',
        },
      };
      const items = [requiredField];

      if (data.repeatable === true) {
        return {
          items: items.concat(
            ...[
              {
                custom: true,
                customBootstrapClass: 'col-md-12',
                label: {
                  id: 'content-type-builder.form.attribute.item.minimum',
                },
                name: 'min',
                type: 'checkbox',
                value: false,
                validations: { required: true },
              },
              {
                custom: true,
                customBootstrapClass: 'col-md-12',
                label: {
                  id: 'content-type-builder.form.attribute.item.maximum',
                },
                name: 'max',
                type: 'checkbox',
                value: false,
                validations: { required: true },
              },
            ]
          ),
        };
      }

      return { items };
    },
  },
  json: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ],
    },
  },
  media: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
        {
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.media.multiple',
          },
          name: 'multiple',
          type: 'checkbox',
          value: false,
          validations: {},
        },
      ],
    },
    advanced: {
      items: [
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ],
    },
  },
  number: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.number.name',
          },
          name: 'name',
          type: 'string',
          value: '',
          validations: {
            required: true,
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.number.type',
          },
          name: 'type',
          type: 'select',
          value: 'integer',
          selectOptions: [
            {
              name:
                'content-type-builder.form.attribute.item.number.type.integer',
              value: 'integer',
            },
            {
              name:
                'content-type-builder.form.attribute.item.number.type.biginteger',
              value: 'biginteger',
            },
            {
              name:
                'content-type-builder.form.attribute.item.number.type.float',
              value: 'float',
            },
            {
              name:
                'content-type-builder.form.attribute.item.number.type.decimal',
              value: 'decimal',
            },
          ],
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          label: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          name: 'default',
          type: 'number',
          value: 0,
          customBootstrapClass: 'col-md-6',
          validations: {},
        },
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          customBootstrapClass: 'col-md-12',
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          value: false,
          validations: {},
        },
        {
          custom: true,
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.minimum',
          },
          name: 'min',
          type: 'checkbox',
          value: false,
          validations: { required: true },
        },
        {
          custom: true,
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.maximum',
          },
          name: 'max',
          type: 'checkbox',
          value: false,
          validations: { required: true },
        },
      ],
    },
  },
  password: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.minimumLength',
          },
          name: 'minLength',
          custom: true,
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: { required: true },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.maximumLength',
          },
          name: 'maxLength',
          type: 'checkbox',
          custom: true,
          value: false,
          validations: { required: true },
        },
      ],
    },
  },
  richtext: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          label: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          name: 'default',
          type: 'textarea',
          value: '',
          validations: {},
        },
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.minimumLength',
          },
          name: 'minLength',
          custom: true,
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: { required: true },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.maximumLength',
          },
          name: 'maxLength',
          type: 'checkbox',
          custom: true,
          value: false,
          validations: { required: true },
        },
      ],
    },
  },
  string: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          label: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          name: 'default',
          type: 'string',
          value: '',
          validations: {},
        },
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.minimumLength',
          },
          name: 'minLength',
          custom: true,
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: { required: true },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.maximumLength',
          },
          name: 'maxLength',
          type: 'checkbox',
          custom: true,
          value: false,
          validations: { required: true },
        },
      ],
    },
  },
  text: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.textarea.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          label: {
            id: 'content-type-builder.form.attribute.settings.default',
          },
          name: 'default',
          type: 'textarea',
          value: '',
          validations: {},
        },
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.minimumLength',
          },
          name: 'minLength',
          custom: true,
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: { required: true },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.maximumLength',
          },
          name: 'maxLength',
          type: 'checkbox',
          custom: true,
          value: false,
          validations: { required: true },
        },
      ],
    },
  },
  tags: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ],
    },
  },
  address: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ],
    },
  },
  openinghours: {
    base: {
      items: [
        {
          inputDescription: {
            id: 'content-type-builder.form.attribute.info.no-space-allowed',
          },
          label: {
            id: 'content-type-builder.form.attribute.item.string.name',
          },
          name: 'name',
          type: 'string',
          defaultValue: '',
          validations: {
            required: true,
          },
        },
      ],
    },
    advanced: {
      items: [
        {
          title: {
            id: 'content-type-builder.form.attribute.item.settings.name',
          },
          customBootstrapClass: 'col-md-12',
          label: {
            id: 'content-type-builder.form.attribute.item.requiredField',
          },
          name: 'required',
          type: 'checkbox',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.requiredField.description',
          },
        },
        {
          label: {
            id: 'content-type-builder.form.attribute.item.uniqueField',
          },
          name: 'unique',
          type: 'checkbox',
          customBootstrapClass: 'col-md-12',
          value: false,
          validations: {},
          inputDescription: {
            id:
              'content-type-builder.form.attribute.item.uniqueField.description',
          },
        },
      ],
    },
  },
};

export default attributes;
