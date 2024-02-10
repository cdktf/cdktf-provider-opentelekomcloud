# `lbLoadbalancerV3` Submodule <a name="`lbLoadbalancerV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbLoadbalancerV3 <a name="LbLoadbalancerV3" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3;

LbLoadbalancerV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .networkIds(java.util.List<java.lang.String>)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipTargetEnable(java.lang.Boolean)
//  .ipTargetEnable(IResolvable)
//  .l4Flavor(java.lang.String)
//  .l7Flavor(java.lang.String)
//  .name(java.lang.String)
//  .publicIp(LbLoadbalancerV3PublicIp)
//  .routerId(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vipAddress(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.networkIds">networkIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#description LbLoadbalancerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.ipTargetEnable">ipTargetEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.l4Flavor">l4Flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.l7Flavor">l7Flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#name LbLoadbalancerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.routerId">routerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.vipAddress">vipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.availabilityZones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}.

---

##### `networkIds`<sup>Required</sup> <a name="networkIds" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.networkIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.adminStateUp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#description LbLoadbalancerV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipTargetEnable`<sup>Optional</sup> <a name="ipTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.ipTargetEnable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}.

---

##### `l4Flavor`<sup>Optional</sup> <a name="l4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.l4Flavor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}.

---

##### `l7Flavor`<sup>Optional</sup> <a name="l7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.l7Flavor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#name LbLoadbalancerV3#name}.

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.publicIp"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#public_ip LbLoadbalancerV3#public_ip}

---

##### `routerId`<sup>Optional</sup> <a name="routerId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.routerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.subnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}.

---

##### `vipAddress`<sup>Optional</sup> <a name="vipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.Initializer.parameter.vipAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp">putPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetIpTargetEnable">resetIpTargetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL4Flavor">resetL4Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL7Flavor">resetL7Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetPublicIp">resetPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetRouterId">resetRouterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetVipAddress">resetVipAddress</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPublicIp` <a name="putPublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp"></a>

```java
public void putPublicIp(LbLoadbalancerV3PublicIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.putPublicIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetAdminStateUp"></a>

```java
public void resetAdminStateUp()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetId"></a>

```java
public void resetId()
```

##### `resetIpTargetEnable` <a name="resetIpTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetIpTargetEnable"></a>

```java
public void resetIpTargetEnable()
```

##### `resetL4Flavor` <a name="resetL4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL4Flavor"></a>

```java
public void resetL4Flavor()
```

##### `resetL7Flavor` <a name="resetL7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetL7Flavor"></a>

```java
public void resetL7Flavor()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetName"></a>

```java
public void resetName()
```

##### `resetPublicIp` <a name="resetPublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetPublicIp"></a>

```java
public void resetPublicIp()
```

##### `resetRouterId` <a name="resetRouterId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetRouterId"></a>

```java
public void resetRouterId()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetTags"></a>

```java
public void resetTags()
```

##### `resetVipAddress` <a name="resetVipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.resetVipAddress"></a>

```java
public void resetVipAddress()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbLoadbalancerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3;

LbLoadbalancerV3.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3;

LbLoadbalancerV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3;

LbLoadbalancerV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3;

LbLoadbalancerV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LbLoadbalancerV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LbLoadbalancerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LbLoadbalancerV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LbLoadbalancerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LbLoadbalancerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference">LbLoadbalancerV3PublicIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipPortId">vipPortId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUpInput">adminStateUpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZonesInput">availabilityZonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnableInput">ipTargetEnableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4FlavorInput">l4FlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7FlavorInput">l7FlavorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIdsInput">networkIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIpInput">publicIpInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerIdInput">routerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddressInput">vipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnable">ipTargetEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4Flavor">l4Flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7Flavor">l7Flavor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIds">networkIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerId">routerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddress">vipAddress</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIp"></a>

```java
public LbLoadbalancerV3PublicIpOutputReference getPublicIp();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference">LbLoadbalancerV3PublicIpOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vipPortId`<sup>Required</sup> <a name="vipPortId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipPortId"></a>

```java
public java.lang.String getVipPortId();
```

- *Type:* java.lang.String

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUpInput"></a>

```java
public java.lang.Object getAdminStateUpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZonesInput`<sup>Optional</sup> <a name="availabilityZonesInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZonesInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipTargetEnableInput`<sup>Optional</sup> <a name="ipTargetEnableInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnableInput"></a>

```java
public java.lang.Object getIpTargetEnableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `l4FlavorInput`<sup>Optional</sup> <a name="l4FlavorInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4FlavorInput"></a>

```java
public java.lang.String getL4FlavorInput();
```

- *Type:* java.lang.String

---

##### `l7FlavorInput`<sup>Optional</sup> <a name="l7FlavorInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7FlavorInput"></a>

```java
public java.lang.String getL7FlavorInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkIdsInput`<sup>Optional</sup> <a name="networkIdsInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIdsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publicIpInput`<sup>Optional</sup> <a name="publicIpInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.publicIpInput"></a>

```java
public LbLoadbalancerV3PublicIp getPublicIpInput();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---

##### `routerIdInput`<sup>Optional</sup> <a name="routerIdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerIdInput"></a>

```java
public java.lang.String getRouterIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vipAddressInput`<sup>Optional</sup> <a name="vipAddressInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddressInput"></a>

```java
public java.lang.String getVipAddressInput();
```

- *Type:* java.lang.String

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipTargetEnable`<sup>Required</sup> <a name="ipTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.ipTargetEnable"></a>

```java
public java.lang.Object getIpTargetEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `l4Flavor`<sup>Required</sup> <a name="l4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l4Flavor"></a>

```java
public java.lang.String getL4Flavor();
```

- *Type:* java.lang.String

---

##### `l7Flavor`<sup>Required</sup> <a name="l7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.l7Flavor"></a>

```java
public java.lang.String getL7Flavor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkIds`<sup>Required</sup> <a name="networkIds" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.networkIds"></a>

```java
public java.util.List<java.lang.String> getNetworkIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `routerId`<sup>Required</sup> <a name="routerId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.routerId"></a>

```java
public java.lang.String getRouterId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vipAddress`<sup>Required</sup> <a name="vipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.vipAddress"></a>

```java
public java.lang.String getVipAddress();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbLoadbalancerV3Config <a name="LbLoadbalancerV3Config" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3Config;

LbLoadbalancerV3Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .availabilityZones(java.util.List<java.lang.String>)
    .networkIds(java.util.List<java.lang.String>)
//  .adminStateUp(java.lang.Boolean)
//  .adminStateUp(IResolvable)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ipTargetEnable(java.lang.Boolean)
//  .ipTargetEnable(IResolvable)
//  .l4Flavor(java.lang.String)
//  .l7Flavor(java.lang.String)
//  .name(java.lang.String)
//  .publicIp(LbLoadbalancerV3PublicIp)
//  .routerId(java.lang.String)
//  .subnetId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .vipAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.networkIds">networkIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.adminStateUp">adminStateUp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#description LbLoadbalancerV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.ipTargetEnable">ipTargetEnable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l4Flavor">l4Flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l7Flavor">l7Flavor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#name LbLoadbalancerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | public_ip block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.routerId">routerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.vipAddress">vipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#availability_zones LbLoadbalancerV3#availability_zones}.

---

##### `networkIds`<sup>Required</sup> <a name="networkIds" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.networkIds"></a>

```java
public java.util.List<java.lang.String> getNetworkIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#network_ids LbLoadbalancerV3#network_ids}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.adminStateUp"></a>

```java
public java.lang.Object getAdminStateUp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#admin_state_up LbLoadbalancerV3#admin_state_up}.

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#deletion_protection LbLoadbalancerV3#deletion_protection}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#description LbLoadbalancerV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipTargetEnable`<sup>Optional</sup> <a name="ipTargetEnable" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.ipTargetEnable"></a>

```java
public java.lang.Object getIpTargetEnable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#ip_target_enable LbLoadbalancerV3#ip_target_enable}.

---

##### `l4Flavor`<sup>Optional</sup> <a name="l4Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l4Flavor"></a>

```java
public java.lang.String getL4Flavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l4_flavor LbLoadbalancerV3#l4_flavor}.

---

##### `l7Flavor`<sup>Optional</sup> <a name="l7Flavor" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.l7Flavor"></a>

```java
public java.lang.String getL7Flavor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#l7_flavor LbLoadbalancerV3#l7_flavor}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#name LbLoadbalancerV3#name}.

---

##### `publicIp`<sup>Optional</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.publicIp"></a>

```java
public LbLoadbalancerV3PublicIp getPublicIp();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

public_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#public_ip LbLoadbalancerV3#public_ip}

---

##### `routerId`<sup>Optional</sup> <a name="routerId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.routerId"></a>

```java
public java.lang.String getRouterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#router_id LbLoadbalancerV3#router_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#subnet_id LbLoadbalancerV3#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#tags LbLoadbalancerV3#tags}.

---

##### `vipAddress`<sup>Optional</sup> <a name="vipAddress" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3Config.property.vipAddress"></a>

```java
public java.lang.String getVipAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#vip_address LbLoadbalancerV3#vip_address}.

---

### LbLoadbalancerV3PublicIp <a name="LbLoadbalancerV3PublicIp" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3PublicIp;

LbLoadbalancerV3PublicIp.builder()
//  .bandwidthChargeMode(java.lang.String)
//  .bandwidthName(java.lang.String)
//  .bandwidthShareType(java.lang.String)
//  .bandwidthSize(java.lang.Number)
//  .id(java.lang.String)
//  .ipType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthChargeMode">bandwidthChargeMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthName">bandwidthName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_name LbLoadbalancerV3#bandwidth_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthShareType">bandwidthShareType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_share_type LbLoadbalancerV3#bandwidth_share_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthSize">bandwidthSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.ipType">ipType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#ip_type LbLoadbalancerV3#ip_type}. |

---

##### `bandwidthChargeMode`<sup>Optional</sup> <a name="bandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthChargeMode"></a>

```java
public java.lang.String getBandwidthChargeMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_charge_mode LbLoadbalancerV3#bandwidth_charge_mode}.

---

##### `bandwidthName`<sup>Optional</sup> <a name="bandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthName"></a>

```java
public java.lang.String getBandwidthName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_name LbLoadbalancerV3#bandwidth_name}.

---

##### `bandwidthShareType`<sup>Optional</sup> <a name="bandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthShareType"></a>

```java
public java.lang.String getBandwidthShareType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_share_type LbLoadbalancerV3#bandwidth_share_type}.

---

##### `bandwidthSize`<sup>Optional</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.bandwidthSize"></a>

```java
public java.lang.Number getBandwidthSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#bandwidth_size LbLoadbalancerV3#bandwidth_size}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#id LbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipType`<sup>Optional</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.1/docs/resources/lb_loadbalancer_v3#ip_type LbLoadbalancerV3#ip_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbLoadbalancerV3PublicIpOutputReference <a name="LbLoadbalancerV3PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.lb_loadbalancer_v3.LbLoadbalancerV3PublicIpOutputReference;

new LbLoadbalancerV3PublicIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthChargeMode">resetBandwidthChargeMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthName">resetBandwidthName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthShareType">resetBandwidthShareType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthSize">resetBandwidthSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetIpType">resetIpType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBandwidthChargeMode` <a name="resetBandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthChargeMode"></a>

```java
public void resetBandwidthChargeMode()
```

##### `resetBandwidthName` <a name="resetBandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthName"></a>

```java
public void resetBandwidthName()
```

##### `resetBandwidthShareType` <a name="resetBandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthShareType"></a>

```java
public void resetBandwidthShareType()
```

##### `resetBandwidthSize` <a name="resetBandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetBandwidthSize"></a>

```java
public void resetBandwidthSize()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetIpType` <a name="resetIpType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.resetIpType"></a>

```java
public void resetIpType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.managed">managed</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeModeInput">bandwidthChargeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthNameInput">bandwidthNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareTypeInput">bandwidthShareTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSizeInput">bandwidthSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipTypeInput">ipTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode">bandwidthChargeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthName">bandwidthName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType">bandwidthShareType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize">bandwidthSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipType">ipType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.managed"></a>

```java
public IResolvable getManaged();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `bandwidthChargeModeInput`<sup>Optional</sup> <a name="bandwidthChargeModeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeModeInput"></a>

```java
public java.lang.String getBandwidthChargeModeInput();
```

- *Type:* java.lang.String

---

##### `bandwidthNameInput`<sup>Optional</sup> <a name="bandwidthNameInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthNameInput"></a>

```java
public java.lang.String getBandwidthNameInput();
```

- *Type:* java.lang.String

---

##### `bandwidthShareTypeInput`<sup>Optional</sup> <a name="bandwidthShareTypeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareTypeInput"></a>

```java
public java.lang.String getBandwidthShareTypeInput();
```

- *Type:* java.lang.String

---

##### `bandwidthSizeInput`<sup>Optional</sup> <a name="bandwidthSizeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSizeInput"></a>

```java
public java.lang.Number getBandwidthSizeInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipTypeInput`<sup>Optional</sup> <a name="ipTypeInput" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipTypeInput"></a>

```java
public java.lang.String getIpTypeInput();
```

- *Type:* java.lang.String

---

##### `bandwidthChargeMode`<sup>Required</sup> <a name="bandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode"></a>

```java
public java.lang.String getBandwidthChargeMode();
```

- *Type:* java.lang.String

---

##### `bandwidthName`<sup>Required</sup> <a name="bandwidthName" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthName"></a>

```java
public java.lang.String getBandwidthName();
```

- *Type:* java.lang.String

---

##### `bandwidthShareType`<sup>Required</sup> <a name="bandwidthShareType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType"></a>

```java
public java.lang.String getBandwidthShareType();
```

- *Type:* java.lang.String

---

##### `bandwidthSize`<sup>Required</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize"></a>

```java
public java.lang.Number getBandwidthSize();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.ipType"></a>

```java
public java.lang.String getIpType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIpOutputReference.property.internalValue"></a>

```java
public LbLoadbalancerV3PublicIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbLoadbalancerV3.LbLoadbalancerV3PublicIp">LbLoadbalancerV3PublicIp</a>

---



