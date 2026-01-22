
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';

export default function AddInitiativeCard() {
  return (
    <div className=" btnOne-bg-gradient border-2 w-[424px] h-[400px] border-dashed border-1 rounded-[20px] border-black font-jakarta">
      <Card className="h-full flex items-center justify-center border-6 border-dashed border-black  bg-black rounded-[16px]  transition">
        <div className="flex flex-col items-center cursor-pointer text-gray-400 gap-2">
          <Plus />
          <span className="text-sm ">Add New Initiative</span>
        </div>
      </Card>
    </div>
  );
}
