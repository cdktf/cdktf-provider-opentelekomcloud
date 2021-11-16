// https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbPoolV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#description LbPoolV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#lb_algorithm LbPoolV3#lb_algorithm}
  */
  readonly lbAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#listener_id LbPoolV3#listener_id}
  */
  readonly listenerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#loadbalancer_id LbPoolV3#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#name LbPoolV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#project_id LbPoolV3#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#protocol LbPoolV3#protocol}
  */
  readonly protocol: string;
  /**
  * session_persistence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#session_persistence LbPoolV3#session_persistence}
  */
  readonly sessionPersistence?: LbPoolV3SessionPersistence;
}
export interface LbPoolV3SessionPersistence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#cookie_name LbPoolV3#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#persistence_timeout LbPoolV3#persistence_timeout}
  */
  readonly persistenceTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html#type LbPoolV3#type}
  */
  readonly type: string;
}

function lbPoolV3SessionPersistenceToTerraform(struct?: LbPoolV3SessionPersistenceOutputReference | LbPoolV3SessionPersistence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    persistence_timeout: cdktf.numberToTerraform(struct!.persistenceTimeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class LbPoolV3SessionPersistenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cookie_name - computed: true, optional: true, required: false
  private _cookieName?: string | undefined; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string | undefined) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName
  }

  // persistence_timeout - computed: true, optional: true, required: false
  private _persistenceTimeout?: number | undefined; 
  public get persistenceTimeout() {
    return this.getNumberAttribute('persistence_timeout');
  }
  public set persistenceTimeout(value: number | undefined) {
    this._persistenceTimeout = value;
  }
  public resetPersistenceTimeout() {
    this._persistenceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceTimeoutInput() {
    return this._persistenceTimeout
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html opentelekomcloud_lb_pool_v3}
*/
export class LbPoolV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "opentelekomcloud_lb_pool_v3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/lb_pool_v3.html opentelekomcloud_lb_pool_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbPoolV3Config
  */
  public constructor(scope: Construct, id: string, config: LbPoolV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_pool_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._lbAlgorithm = config.lbAlgorithm;
    this._listenerId = config.listenerId;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._projectId = config.projectId;
    this._protocol = config.protocol;
    this._sessionPersistence = config.sessionPersistence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // lb_algorithm - computed: false, optional: false, required: true
  private _lbAlgorithm?: string; 
  public get lbAlgorithm() {
    return this.getStringAttribute('lb_algorithm');
  }
  public set lbAlgorithm(value: string) {
    this._lbAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmInput() {
    return this._lbAlgorithm
  }

  // listener_id - computed: true, optional: true, required: false
  private _listenerId?: string | undefined; 
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }
  public set listenerId(value: string | undefined) {
    this._listenerId = value;
  }
  public resetListenerId() {
    this._listenerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerIdInput() {
    return this._listenerId
  }

  // loadbalancer_id - computed: true, optional: true, required: false
  private _loadbalancerId?: string | undefined; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string | undefined) {
    this._loadbalancerId = value;
  }
  public resetLoadbalancerId() {
    this._loadbalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string | undefined; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string | undefined) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // session_persistence - computed: false, optional: true, required: false
  private _sessionPersistence?: LbPoolV3SessionPersistence | undefined; 
  private __sessionPersistenceOutput = new LbPoolV3SessionPersistenceOutputReference(this as any, "session_persistence", true);
  public get sessionPersistence() {
    return this.__sessionPersistenceOutput;
  }
  public putSessionPersistence(value: LbPoolV3SessionPersistence | undefined) {
    this._sessionPersistence = value;
  }
  public resetSessionPersistence() {
    this._sessionPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistenceInput() {
    return this._sessionPersistence
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      lb_algorithm: cdktf.stringToTerraform(this._lbAlgorithm),
      listener_id: cdktf.stringToTerraform(this._listenerId),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      protocol: cdktf.stringToTerraform(this._protocol),
      session_persistence: lbPoolV3SessionPersistenceToTerraform(this._sessionPersistence),
    };
  }
}
