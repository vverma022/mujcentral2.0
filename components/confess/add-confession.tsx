'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from 'axios';
import { ErrorAlert, SuccessAlert } from '../shared/alearts';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';



export default function AddConfessionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [confession, setConfession] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>('');
  const [message, setMessage] = useState<string | null>('');
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
   
  };

  const renderTriggerButton = () => {
    if (!isLoaded) {
      return <Button size="lg" className="px-8">Loading...</Button>;
    }
    
    if (!isSignedIn) {
      return (
        <Button 
          size="lg" 
          className="px-8"
          onClick={() => router.push('/sign-in')}
        >
          Sign in to Confess
        </Button>
      );
    } else {
      return (
        <DialogTrigger asChild>
          <Button size="lg" className="px-8">
            Add Confession
          </Button>
        </DialogTrigger>
      );
    }
  }



  return (
    <>
     <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {renderTriggerButton()}
        
        {isSignedIn && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-gradient_indigo-purple text-center font-heading">
                Add New Confession
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="confession">Your Confession</Label>
                <Textarea
                  id="confession"
                  name="confession"
                  placeholder="Type your confession here..."
                  value={confession}
                  onChange={(e) => setConfession(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
                <p className="text-center text-xs text-muted-foreground">
                  Please understand that there are certain boundaries to things.
                </p>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Confession'}
              </Button>
            </form>
          </DialogContent>
        )}
      </Dialog>
      
      <div className="pointer-events-none fixed inset-0 z-[9999] flex items-end justify-end p-4">
        <div className="pointer-events-auto space-y-4">
          {message && (<SuccessAlert success={message} setSuccess={setMessage} />)}
          {error && (<ErrorAlert error={error} setError={setError} />)}
        </div>
      </div>
  </>
  );
}