// https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudDnsZoneV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html#description DataOpentelekomcloudDnsZoneV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html#email DataOpentelekomcloudDnsZoneV2#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html#name DataOpentelekomcloudDnsZoneV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html#status DataOpentelekomcloudDnsZoneV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html#tags DataOpentelekomcloudDnsZoneV2#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html#ttl DataOpentelekomcloudDnsZoneV2#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html#zone_type DataOpentelekomcloudDnsZoneV2#zone_type}
  */
  readonly zoneType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html opentelekomcloud_dns_zone_v2}
*/
export class DataOpentelekomcloudDnsZoneV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_dns_zone_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/dns_zone_v2.html opentelekomcloud_dns_zone_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudDnsZoneV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudDnsZoneV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dns_zone_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._email = config.email;
    this._name = config.name;
    this._status = config.status;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._zoneType = config.zoneType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  public links(key: string): string {
    return new cdktf.StringMap(this, 'links').lookup(key);
  }

  // masters - computed: true, optional: false, required: false
  public get masters() {
    return this.getListAttribute('masters');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getNumberAttribute('serial');
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // zone_type - computed: true, optional: true, required: false
  private _zoneType?: string; 
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }
  public set zoneType(value: string) {
    this._zoneType = value;
  }
  public resetZoneType() {
    this._zoneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTypeInput() {
    return this._zoneType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_type: cdktf.stringToTerraform(this._zoneType),
    };
  }
}
