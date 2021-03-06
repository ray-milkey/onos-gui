/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NetworkSnapshot} from '../../proto/github.com/onosproject/onos-config/api/types/snapshot/network/types_pb';
import {DeviceService} from '../../device.service';
import {OnosConfigAdminService} from '../../proto/onos-config-admin.service';
import {Snapshot} from '../../proto/github.com/onosproject/onos-config/api/types/snapshot/device/types_pb';
import {KeyValue} from '@angular/common';
import {Device} from '../../../onos-topo/proto/github.com/onosproject/onos-topo/api/device/device_pb';

@Component({
    selector: '[onos-network-snapshot]',
    templateUrl: './network-snapshot.component.html',
    styleUrls: ['./network-snapshot.component.css']
})
export class NetworkSnapshotComponent implements OnInit {
    @Input() deviceSortCriterion: (a: KeyValue<string, Device>, b: KeyValue<string, Device>) => number
        = DeviceService.deviceSorterForwardAlpha;
    @Output() dsSelected = new EventEmitter<string>();

    constructor(
        public deviceService: DeviceService,
        public admin: OnosConfigAdminService
    ) {
    }

    ngOnInit() {
    }

    itemSelected(id: string) {
        this.dsSelected.emit(id);
    }
}
