import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './create-pet.input';
import { Pet } from './pet.entity';
@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petRepository: Repository<Pet>,
    private ownersService: OwnersService,
  ) {}
  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput);
    return this.petRepository.save(newPet);
  }
  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }
  getPet(id: number): Promise<Pet> {
    return this.petRepository.findOne(id);
  }
  getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId);
  }
}
