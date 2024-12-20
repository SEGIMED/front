'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CancellationReason } from '../types';

interface CancelAppointmentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: (
    reason: string,
    comments: string,
    notify: boolean
  ) => Promise<void>;
  reasons: CancellationReason[];
}

export function CancelAppointmentDialog({
  isOpen,
  onClose,
  onCancel,
  reasons
}: CancelAppointmentDialogProps) {
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');
  const [notifyPatient, setNotifyPatient] = useState(true);

  const handleCancel = async () => {
    await onCancel(reason, comments, notifyPatient);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrar</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="reason">Motivo de la cancelación *</Label>
            <Select value={reason} onValueChange={setReason}>
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un motivo" />
              </SelectTrigger>
              <SelectContent>
                {reasons.map((reason) => (
                  <SelectItem key={reason.id} value={reason.id}>
                    {reason.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="comments">Comentarios</Label>
            <Textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              rows={3}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="notify"
              checked={notifyPatient}
              onCheckedChange={(checked) =>
                setNotifyPatient(checked as boolean)
              }
            />
            <Label htmlFor="notify">
              Notificar de la cancelación al paciente
            </Label>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant="destructive"
            onClick={handleCancel}
            disabled={!reason}
          >
            Borrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
