'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function Dashboard() {
  const [rooms, setRooms] = useState([
    { id: 'A1', tenant: 'Rina', rent: 850000, paid: true },
    { id: 'A2', tenant: 'Dodi', rent: 900000, paid: false },
  ]);

  const [newRoom, setNewRoom] = useState({ id: '', tenant: '', rent: 0 });

  const handleAddRoom = () => {
    if (newRoom.id && newRoom.tenant && newRoom.rent > 0) {
      setRooms([...rooms, { ...newRoom, paid: false }]);
      setNewRoom({ id: '', tenant: '', rent: 0 });
    }
  };

  const totalRooms = rooms.length;
  const activeTenants = rooms.filter(r => r.tenant).length;
  const unpaidRooms = rooms.filter(r => !r.paid).length;
  const totalIncome = rooms.filter(r => r.paid).reduce((sum, r) => sum + r.rent, 0);

  return (
    <div className="p-4 space-y-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold">KosKu</h1>
      <div className="grid grid-cols-2 gap-2">
        <Card><CardContent><p>Total Kamar<br /><strong>{totalRooms}</strong></p></CardContent></Card>
        <Card><CardContent><p>Total Penyewa Aktif<br /><strong>{activeTenants}</strong></p></CardContent></Card>
        <Card><CardContent><p>Pemasukan Bulan Ini<br /><strong>Rp{totalIncome.toLocaleString()}</strong></p></CardContent></Card>
        <Card><CardContent><p>Kamar Belum Bayar<br /><strong>{unpaidRooms}</strong></p></CardContent></Card>
      </div>

      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button>+ Tambah Kamar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tambah Kamar Baru</DialogTitle>
            </DialogHeader>
            <div className="space-y-2">
              <Input
                placeholder="ID Kamar (misal: A3)"
                value={newRoom.id}
                onChange={(e) => setNewRoom({ ...newRoom, id: e.target.value })}
              />
              <Input
                placeholder="Nama Penyewa"
                value={newRoom.tenant}
                onChange={(e) => setNewRoom({ ...newRoom, tenant: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Harga Sewa (Rp)"
                value={newRoom.rent}
                onChange={(e) => setNewRoom({ ...newRoom, rent: parseInt(e.target.value) })}
              />
              <Button onClick={handleAddRoom}>Simpan</Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button variant="outline">+ Buat Tagihan</Button>
      </div>

      <div>
        <h2 className="font-semibold mt-4">Manajemen Kamar</h2>
        <table className="w-full text-sm mt-2">
          <thead>
            <tr className="text-left border-b">
              <th>Kamar</th>
              <th>Penyewa</th>
              <th>Tagihan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id} className="border-b">
                <td>{room.id}</td>
                <td>{room.tenant}</td>
                <td>Rp{room.rent.toLocaleString()}</td>
                <td>
                  {room.paid ? (
                    <span className="text-green-600">Lunas</span>
                  ) : (
                    <span className="text-red-600">Belum</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}