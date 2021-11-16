// https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwrDomainV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#access_domain SwrDomainV2#access_domain}
  */
  readonly accessDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#deadline SwrDomainV2#deadline}
  */
  readonly deadline: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#description SwrDomainV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#organization SwrDomainV2#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#permission SwrDomainV2#permission}
  */
  readonly permission: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#repository SwrDomainV2#repository}
  */
  readonly repository: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#timeouts SwrDomainV2#timeouts}
  */
  readonly timeouts?: SwrDomainV2Timeouts;
}
export interface SwrDomainV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html#default SwrDomainV2#default}
  */
  readonly default?: string;
}

function swrDomainV2TimeoutsToTerraform(struct?: SwrDomainV2TimeoutsOutputReference | SwrDomainV2Timeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}

export class SwrDomainV2TimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default - computed: false, optional: true, required: false
  private _default?: string | undefined; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string | undefined) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html opentelekomcloud_swr_domain_v2}
*/
export class SwrDomainV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_swr_domain_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/swr_domain_v2.html opentelekomcloud_swr_domain_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwrDomainV2Config
  */
  public constructor(scope: Construct, id: string, config: SwrDomainV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_swr_domain_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessDomain = config.accessDomain;
    this._deadline = config.deadline;
    this._description = config.description;
    this._organization = config.organization;
    this._permission = config.permission;
    this._repository = config.repository;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_domain - computed: false, optional: false, required: true
  private _accessDomain?: string; 
  public get accessDomain() {
    return this.getStringAttribute('access_domain');
  }
  public set accessDomain(value: string) {
    this._accessDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessDomainInput() {
    return this._accessDomain
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // creator_id - computed: true, optional: false, required: false
  public get creatorId() {
    return this.getStringAttribute('creator_id');
  }

  // creator_name - computed: true, optional: false, required: false
  public get creatorName() {
    return this.getStringAttribute('creator_name');
  }

  // deadline - computed: false, optional: false, required: true
  private _deadline?: string; 
  public get deadline() {
    return this.getStringAttribute('deadline');
  }
  public set deadline(value: string) {
    this._deadline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlineInput() {
    return this._deadline
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status') as any;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SwrDomainV2Timeouts | undefined; 
  private __timeoutsOutput = new SwrDomainV2TimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SwrDomainV2Timeouts | undefined) {
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
      access_domain: cdktf.stringToTerraform(this._accessDomain),
      deadline: cdktf.stringToTerraform(this._deadline),
      description: cdktf.stringToTerraform(this._description),
      organization: cdktf.stringToTerraform(this._organization),
      permission: cdktf.stringToTerraform(this._permission),
      repository: cdktf.stringToTerraform(this._repository),
      timeouts: swrDomainV2TimeoutsToTerraform(this._timeouts),
    };
  }
}
