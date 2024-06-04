import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Perfil } from 'src/app/models/perfil';

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {
  perfilForm: FormGroup;
  titulo = 'Crear perfil';
  public imageUrl: string = '/assets/defecto.png';
  codigoPais: string = 'co';

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.perfilForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo_institucional: ['', [Validators.required, Validators.email]],
      correo_personal: ['', [Validators.required, Validators.email]],
      whatsApp: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      pais: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
    }
  }

  agregarPerfil() {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      return;
    }

    const PERFIL: Perfil = {
      nombres: this.perfilForm.get('nombres')?.value,
      apellidos: this.perfilForm.get('apellidos')?.value,
      correo_institucional: this.perfilForm.get('correo_institucional')?.value,
      correo_personal: this.perfilForm.get('correo_personal')?.value,
      whatsApp: this.perfilForm.get('whatsApp')?.value,
      pais: this.perfilForm.get('pais')?.value,
    };

    console.log(PERFIL);
    this.toastr.success('El perfil fue registrado con éxito!', 'Perfil registrado!');
  }


  cambioPais(event: any) {
    this.codigoPais = event.target.value;
  }
}
