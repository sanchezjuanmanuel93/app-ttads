import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/models/player';
import { TeamService } from 'src/app/services/team.service';
import { FormControl, Validators } from '@angular/forms';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.scss']
})
export class CreatePlayerComponent implements OnInit {

  @Output("addPlayerToTeam") addPlayerToTeam: EventEmitter<Player> = new EventEmitter();

  name: any;


  constructor(
    public teamService: TeamService,
    public playersService: PlayersService) {
    // this.name = new FormControl('', Validators.required)
  }

  ngOnInit() {
  }

  save() {
    let player = new Player({ name: this.name });
    this.playersService.save(player).subscribe((_player: Player) => {
      this.addPlayerToTeam.emit(_player);
      this.name = "";
    })
  }

}
