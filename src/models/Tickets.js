import mongoose, { Schema } from 'mongoose';
import slugify from 'slugify';

mongoose.connect(process.env.MONGODB_URL);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    slug: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

// Middleware to generate a unique slug before saving the document
ticketSchema.pre('save', function (next) {
  if (!this.isModified('title')) {
    return next(); // If title is not modified, proceed
  }

  // Generate slug based on the title
  this.slug = slugify(this.title, { lower: true });

  // Check if the generated slug is unique
  const Ticket = this.constructor;
  const slugRegex = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
  Ticket.countDocuments({ slug: slugRegex })
    .then((count) => {
      if (count !== 0) {
        this.slug = `${this.slug}-${count + 1}`; // Append a number to make it unique
      }
      next();
    })
    .catch(next);
});

ticketSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketSchema);

export default Ticket;
