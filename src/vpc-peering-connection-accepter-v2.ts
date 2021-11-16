// https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPeeringConnectionAccepterV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html#accept VpcPeeringConnectionAccepterV2#accept}
  */
  readonly accept?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html#region VpcPeeringConnectionAccepterV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html#vpc_peering_connection_id VpcPeeringConnectionAccepterV2#vpc_peering_connection_id}
  */
  readonly vpcPeeringConnectionId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html#timeouts VpcPeeringConnectionAccepterV2#timeouts}
  */
  readonly timeouts?: VpcPeeringConnectionAccepterV2Timeouts;
}
export interface VpcPeeringConnectionAccepterV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html#create VpcPeeringConnectionAccepterV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html#delete VpcPeeringConnectionAccepterV2#delete}
  */
  readonly delete?: string;
}

function vpcPeeringConnectionAccepterV2TimeoutsToTerraform(struct?: VpcPeeringConnectionAccepterV2TimeoutsOutputReference | VpcPeeringConnectionAccepterV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VpcPeeringConnectionAccepterV2TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html opentelekomcloud_vpc_peering_connection_accepter_v2}
*/
export class VpcPeeringConnectionAccepterV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_vpc_peering_connection_accepter_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/vpc_peering_connection_accepter_v2.html opentelekomcloud_vpc_peering_connection_accepter_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPeeringConnectionAccepterV2Config
  */
  public constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_vpc_peering_connection_accepter_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accept = config.accept;
    this._region = config.region;
    this._vpcPeeringConnectionId = config.vpcPeeringConnectionId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept - computed: false, optional: true, required: false
  private _accept?: boolean | cdktf.IResolvable | undefined; 
  public get accept() {
    return this.getBooleanAttribute('accept') as any;
  }
  public set accept(value: boolean | cdktf.IResolvable | undefined) {
    this._accept = value;
  }
  public resetAccept() {
    this._accept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_tenant_id - computed: true, optional: false, required: false
  public get peerTenantId() {
    return this.getStringAttribute('peer_tenant_id');
  }

  // peer_vpc_id - computed: true, optional: false, required: false
  public get peerVpcId() {
    return this.getStringAttribute('peer_vpc_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_peering_connection_id - computed: false, optional: false, required: true
  private _vpcPeeringConnectionId?: string; 
  public get vpcPeeringConnectionId() {
    return this.getStringAttribute('vpc_peering_connection_id');
  }
  public set vpcPeeringConnectionId(value: string) {
    this._vpcPeeringConnectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeeringConnectionIdInput() {
    return this._vpcPeeringConnectionId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcPeeringConnectionAccepterV2Timeouts | undefined; 
  private __timeoutsOutput = new VpcPeeringConnectionAccepterV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpcPeeringConnectionAccepterV2Timeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept: cdktf.booleanToTerraform(this._accept),
      region: cdktf.stringToTerraform(this._region),
      vpc_peering_connection_id: cdktf.stringToTerraform(this._vpcPeeringConnectionId),
      timeouts: vpcPeeringConnectionAccepterV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
