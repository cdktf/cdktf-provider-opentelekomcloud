// https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DehHostV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#auto_placement DehHostV1#auto_placement}
  */
  readonly autoPlacement?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#availability_zone DehHostV1#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#available_memory DehHostV1#available_memory}
  */
  readonly availableMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#available_vcpus DehHostV1#available_vcpus}
  */
  readonly availableVcpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#cores DehHostV1#cores}
  */
  readonly cores?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#host_type DehHostV1#host_type}
  */
  readonly hostType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#host_type_name DehHostV1#host_type_name}
  */
  readonly hostTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#id DehHostV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#instance_total DehHostV1#instance_total}
  */
  readonly instanceTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#instance_uuids DehHostV1#instance_uuids}
  */
  readonly instanceUuids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#memory DehHostV1#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#name DehHostV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#region DehHostV1#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#sockets DehHostV1#sockets}
  */
  readonly sockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#status DehHostV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#vcpus DehHostV1#vcpus}
  */
  readonly vcpus?: number;
  /**
  * available_instance_capacities block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#available_instance_capacities DehHostV1#available_instance_capacities}
  */
  readonly availableInstanceCapacities?: DehHostV1AvailableInstanceCapacities[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#timeouts DehHostV1#timeouts}
  */
  readonly timeouts?: DehHostV1Timeouts;
}
export interface DehHostV1AvailableInstanceCapacities {
}

export function dehHostV1AvailableInstanceCapacitiesToTerraform(struct?: DehHostV1AvailableInstanceCapacities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DehHostV1AvailableInstanceCapacitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DehHostV1AvailableInstanceCapacities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DehHostV1AvailableInstanceCapacities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
}

export class DehHostV1AvailableInstanceCapacitiesList extends cdktf.ComplexList {
  public internalValue? : DehHostV1AvailableInstanceCapacities[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DehHostV1AvailableInstanceCapacitiesOutputReference {
    return new DehHostV1AvailableInstanceCapacitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DehHostV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#create DehHostV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1#delete DehHostV1#delete}
  */
  readonly delete?: string;
}

export function dehHostV1TimeoutsToTerraform(struct?: DehHostV1TimeoutsOutputReference | DehHostV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class DehHostV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DehHostV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DehHostV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1 opentelekomcloud_deh_host_v1}
*/
export class DehHostV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_deh_host_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/deh_host_v1 opentelekomcloud_deh_host_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DehHostV1Config
  */
  public constructor(scope: Construct, id: string, config: DehHostV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_deh_host_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.31.6',
        providerVersionConstraint: '~> 1.26'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoPlacement = config.autoPlacement;
    this._availabilityZone = config.availabilityZone;
    this._availableMemory = config.availableMemory;
    this._availableVcpus = config.availableVcpus;
    this._cores = config.cores;
    this._hostType = config.hostType;
    this._hostTypeName = config.hostTypeName;
    this._id = config.id;
    this._instanceTotal = config.instanceTotal;
    this._instanceUuids = config.instanceUuids;
    this._memory = config.memory;
    this._name = config.name;
    this._region = config.region;
    this._sockets = config.sockets;
    this._status = config.status;
    this._vcpus = config.vcpus;
    this._availableInstanceCapacities.internalValue = config.availableInstanceCapacities;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_placement - computed: false, optional: true, required: false
  private _autoPlacement?: string; 
  public get autoPlacement() {
    return this.getStringAttribute('auto_placement');
  }
  public set autoPlacement(value: string) {
    this._autoPlacement = value;
  }
  public resetAutoPlacement() {
    this._autoPlacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPlacementInput() {
    return this._autoPlacement;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // available_memory - computed: true, optional: true, required: false
  private _availableMemory?: number; 
  public get availableMemory() {
    return this.getNumberAttribute('available_memory');
  }
  public set availableMemory(value: number) {
    this._availableMemory = value;
  }
  public resetAvailableMemory() {
    this._availableMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableMemoryInput() {
    return this._availableMemory;
  }

  // available_vcpus - computed: true, optional: true, required: false
  private _availableVcpus?: number; 
  public get availableVcpus() {
    return this.getNumberAttribute('available_vcpus');
  }
  public set availableVcpus(value: number) {
    this._availableVcpus = value;
  }
  public resetAvailableVcpus() {
    this._availableVcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableVcpusInput() {
    return this._availableVcpus;
  }

  // cores - computed: true, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // host_type - computed: false, optional: false, required: true
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // host_type_name - computed: true, optional: true, required: false
  private _hostTypeName?: string; 
  public get hostTypeName() {
    return this.getStringAttribute('host_type_name');
  }
  public set hostTypeName(value: string) {
    this._hostTypeName = value;
  }
  public resetHostTypeName() {
    this._hostTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeNameInput() {
    return this._hostTypeName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instance_total - computed: true, optional: true, required: false
  private _instanceTotal?: number; 
  public get instanceTotal() {
    return this.getNumberAttribute('instance_total');
  }
  public set instanceTotal(value: number) {
    this._instanceTotal = value;
  }
  public resetInstanceTotal() {
    this._instanceTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTotalInput() {
    return this._instanceTotal;
  }

  // instance_uuids - computed: true, optional: true, required: false
  private _instanceUuids?: string[]; 
  public get instanceUuids() {
    return this.getListAttribute('instance_uuids');
  }
  public set instanceUuids(value: string[]) {
    this._instanceUuids = value;
  }
  public resetInstanceUuids() {
    this._instanceUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceUuidsInput() {
    return this._instanceUuids;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sockets - computed: true, optional: true, required: false
  private _sockets?: number; 
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
  public set sockets(value: number) {
    this._sockets = value;
  }
  public resetSockets() {
    this._sockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vcpus - computed: true, optional: true, required: false
  private _vcpus?: number; 
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
  public set vcpus(value: number) {
    this._vcpus = value;
  }
  public resetVcpus() {
    this._vcpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpusInput() {
    return this._vcpus;
  }

  // available_instance_capacities - computed: false, optional: true, required: false
  private _availableInstanceCapacities = new DehHostV1AvailableInstanceCapacitiesList(this, "available_instance_capacities", false);
  public get availableInstanceCapacities() {
    return this._availableInstanceCapacities;
  }
  public putAvailableInstanceCapacities(value: DehHostV1AvailableInstanceCapacities[] | cdktf.IResolvable) {
    this._availableInstanceCapacities.internalValue = value;
  }
  public resetAvailableInstanceCapacities() {
    this._availableInstanceCapacities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableInstanceCapacitiesInput() {
    return this._availableInstanceCapacities.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DehHostV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DehHostV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_placement: cdktf.stringToTerraform(this._autoPlacement),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      available_memory: cdktf.numberToTerraform(this._availableMemory),
      available_vcpus: cdktf.numberToTerraform(this._availableVcpus),
      cores: cdktf.numberToTerraform(this._cores),
      host_type: cdktf.stringToTerraform(this._hostType),
      host_type_name: cdktf.stringToTerraform(this._hostTypeName),
      id: cdktf.stringToTerraform(this._id),
      instance_total: cdktf.numberToTerraform(this._instanceTotal),
      instance_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceUuids),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      sockets: cdktf.numberToTerraform(this._sockets),
      status: cdktf.stringToTerraform(this._status),
      vcpus: cdktf.numberToTerraform(this._vcpus),
      available_instance_capacities: cdktf.listMapper(dehHostV1AvailableInstanceCapacitiesToTerraform, true)(this._availableInstanceCapacities.internalValue),
      timeouts: dehHostV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
