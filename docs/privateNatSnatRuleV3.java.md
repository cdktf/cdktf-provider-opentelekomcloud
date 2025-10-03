# `privateNatSnatRuleV3` Submodule <a name="`privateNatSnatRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNatSnatRuleV3 <a name="PrivateNatSnatRuleV3" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3 opentelekomcloud_private_nat_snat_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3;

PrivateNatSnatRuleV3.Builder.create(Construct scope, java.lang.String id)
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
    .gatewayId(java.lang.String)
    .transitIpIds(java.util.List<java.lang.String>)
//  .cidr(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PrivateNatSnatRuleV3Timeouts)
//  .virsubnetId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.transitIpIds">transitIpIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.virsubnetId">virsubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}.

---

##### `transitIpIds`<sup>Required</sup> <a name="transitIpIds" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.transitIpIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#timeouts PrivateNatSnatRuleV3#timeouts}

---

##### `virsubnetId`<sup>Optional</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.Initializer.parameter.virsubnetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetVirsubnetId">resetVirsubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.putTimeouts"></a>

```java
public void putTimeouts(PrivateNatSnatRuleV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>

---

##### `resetCidr` <a name="resetCidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetCidr"></a>

```java
public void resetCidr()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVirsubnetId` <a name="resetVirsubnetId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.resetVirsubnetId"></a>

```java
public void resetVirsubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3;

PrivateNatSnatRuleV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3;

PrivateNatSnatRuleV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3;

PrivateNatSnatRuleV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3;

PrivateNatSnatRuleV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateNatSnatRuleV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivateNatSnatRuleV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateNatSnatRuleV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateNatSnatRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivateNatSnatRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference">PrivateNatSnatRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpAssociations">transitIpAssociations</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList">PrivateNatSnatRuleV3TransitIpAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidrInput">cidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIdsInput">transitIpIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetIdInput">virsubnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidr">cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIds">transitIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetId">virsubnetId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.enterpriseProjectId"></a>

```java
public java.lang.String getEnterpriseProjectId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeouts"></a>

```java
public PrivateNatSnatRuleV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference">PrivateNatSnatRuleV3TimeoutsOutputReference</a>

---

##### `transitIpAssociations`<sup>Required</sup> <a name="transitIpAssociations" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpAssociations"></a>

```java
public PrivateNatSnatRuleV3TransitIpAssociationsList getTransitIpAssociations();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList">PrivateNatSnatRuleV3TransitIpAssociationsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidrInput"></a>

```java
public java.lang.String getCidrInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>

---

##### `transitIpIdsInput`<sup>Optional</sup> <a name="transitIpIdsInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIdsInput"></a>

```java
public java.util.List<java.lang.String> getTransitIpIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virsubnetIdInput`<sup>Optional</sup> <a name="virsubnetIdInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetIdInput"></a>

```java
public java.lang.String getVirsubnetIdInput();
```

- *Type:* java.lang.String

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `transitIpIds`<sup>Required</sup> <a name="transitIpIds" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.transitIpIds"></a>

```java
public java.util.List<java.lang.String> getTransitIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virsubnetId`<sup>Required</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.virsubnetId"></a>

```java
public java.lang.String getVirsubnetId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNatSnatRuleV3Config <a name="PrivateNatSnatRuleV3Config" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3Config;

PrivateNatSnatRuleV3Config.builder()
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
    .gatewayId(java.lang.String)
    .transitIpIds(java.util.List<java.lang.String>)
//  .cidr(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(PrivateNatSnatRuleV3Timeouts)
//  .virsubnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.transitIpIds">transitIpIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.cidr">cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.virsubnetId">virsubnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#gateway_id PrivateNatSnatRuleV3#gateway_id}.

---

##### `transitIpIds`<sup>Required</sup> <a name="transitIpIds" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.transitIpIds"></a>

```java
public java.util.List<java.lang.String> getTransitIpIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#transit_ip_ids PrivateNatSnatRuleV3#transit_ip_ids}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.cidr"></a>

```java
public java.lang.String getCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#cidr PrivateNatSnatRuleV3#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#description PrivateNatSnatRuleV3#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#id PrivateNatSnatRuleV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.timeouts"></a>

```java
public PrivateNatSnatRuleV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#timeouts PrivateNatSnatRuleV3#timeouts}

---

##### `virsubnetId`<sup>Optional</sup> <a name="virsubnetId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Config.property.virsubnetId"></a>

```java
public java.lang.String getVirsubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#virsubnet_id PrivateNatSnatRuleV3#virsubnet_id}.

---

### PrivateNatSnatRuleV3Timeouts <a name="PrivateNatSnatRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3Timeouts;

PrivateNatSnatRuleV3Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#create PrivateNatSnatRuleV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#delete PrivateNatSnatRuleV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#create PrivateNatSnatRuleV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/private_nat_snat_rule_v3#delete PrivateNatSnatRuleV3#delete}.

---

### PrivateNatSnatRuleV3TransitIpAssociations <a name="PrivateNatSnatRuleV3TransitIpAssociations" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3TransitIpAssociations;

PrivateNatSnatRuleV3TransitIpAssociations.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### PrivateNatSnatRuleV3TimeoutsOutputReference <a name="PrivateNatSnatRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3TimeoutsOutputReference;

new PrivateNatSnatRuleV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3Timeouts">PrivateNatSnatRuleV3Timeouts</a>

---


### PrivateNatSnatRuleV3TransitIpAssociationsList <a name="PrivateNatSnatRuleV3TransitIpAssociationsList" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3TransitIpAssociationsList;

new PrivateNatSnatRuleV3TransitIpAssociationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.get"></a>

```java
public PrivateNatSnatRuleV3TransitIpAssociationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PrivateNatSnatRuleV3TransitIpAssociationsOutputReference <a name="PrivateNatSnatRuleV3TransitIpAssociationsOutputReference" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_snat_rule_v3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference;

new PrivateNatSnatRuleV3TransitIpAssociationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpAddress">transitIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpId">transitIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations">PrivateNatSnatRuleV3TransitIpAssociations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transitIpAddress`<sup>Required</sup> <a name="transitIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpAddress"></a>

```java
public java.lang.String getTransitIpAddress();
```

- *Type:* java.lang.String

---

##### `transitIpId`<sup>Required</sup> <a name="transitIpId" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.transitIpId"></a>

```java
public java.lang.String getTransitIpId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociationsOutputReference.property.internalValue"></a>

```java
public PrivateNatSnatRuleV3TransitIpAssociations getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatSnatRuleV3.PrivateNatSnatRuleV3TransitIpAssociations">PrivateNatSnatRuleV3TransitIpAssociations</a>

---



