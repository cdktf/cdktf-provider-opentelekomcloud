# `privateNatDnatRuleV3` Submodule <a name="`privateNatDnatRuleV3` Submodule" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateNatDnatRuleV3 <a name="PrivateNatDnatRuleV3" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3 opentelekomcloud_private_nat_dnat_rule_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3;

PrivateNatDnatRuleV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayId(java.lang.String)
    .transitIpId(java.lang.String)
//  .description(java.lang.String)
//  .internalServicePort(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .privateIpAddress(java.lang.String)
//  .protocol(java.lang.String)
//  .timeouts(PrivateNatDnatRuleV3Timeouts)
//  .transitServicePort(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.transitIpId">transitIpId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.internalServicePort">internalServicePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.transitServicePort">transitServicePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}.

---

##### `transitIpId`<sup>Required</sup> <a name="transitIpId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.transitIpId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}.

---

##### `internalServicePort`<sup>Optional</sup> <a name="internalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.internalServicePort"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.networkInterfaceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.privateIpAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#timeouts PrivateNatDnatRuleV3#timeouts}

---

##### `transitServicePort`<sup>Optional</sup> <a name="transitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.Initializer.parameter.transitServicePort"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetInternalServicePort">resetInternalServicePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetPrivateIpAddress">resetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTransitServicePort">resetTransitServicePort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts"></a>

```java
public void putTimeouts(PrivateNatDnatRuleV3Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetInternalServicePort` <a name="resetInternalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetInternalServicePort"></a>

```java
public void resetInternalServicePort()
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetNetworkInterfaceId"></a>

```java
public void resetNetworkInterfaceId()
```

##### `resetPrivateIpAddress` <a name="resetPrivateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetPrivateIpAddress"></a>

```java
public void resetPrivateIpAddress()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTransitServicePort` <a name="resetTransitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.resetTransitServicePort"></a>

```java
public void resetTransitServicePort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateNatDnatRuleV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3;

PrivateNatDnatRuleV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3;

PrivateNatDnatRuleV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3;

PrivateNatDnatRuleV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3;

PrivateNatDnatRuleV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateNatDnatRuleV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivateNatDnatRuleV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateNatDnatRuleV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateNatDnatRuleV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivateNatDnatRuleV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.enterpriseProjectId">enterpriseProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference">PrivateNatDnatRuleV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePortInput">internalServicePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddressInput">privateIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpIdInput">transitIpIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePortInput">transitServicePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePort">internalServicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpId">transitIpId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePort">transitServicePort</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enterpriseProjectId`<sup>Required</sup> <a name="enterpriseProjectId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.enterpriseProjectId"></a>

```java
public java.lang.String getEnterpriseProjectId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeouts"></a>

```java
public PrivateNatDnatRuleV3TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference">PrivateNatDnatRuleV3TimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `internalServicePortInput`<sup>Optional</sup> <a name="internalServicePortInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePortInput"></a>

```java
public java.lang.String getInternalServicePortInput();
```

- *Type:* java.lang.String

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceIdInput"></a>

```java
public java.lang.String getNetworkInterfaceIdInput();
```

- *Type:* java.lang.String

---

##### `privateIpAddressInput`<sup>Optional</sup> <a name="privateIpAddressInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddressInput"></a>

```java
public java.lang.String getPrivateIpAddressInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.timeoutsInput"></a>

```java
public IResolvable|PrivateNatDnatRuleV3Timeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---

##### `transitIpIdInput`<sup>Optional</sup> <a name="transitIpIdInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpIdInput"></a>

```java
public java.lang.String getTransitIpIdInput();
```

- *Type:* java.lang.String

---

##### `transitServicePortInput`<sup>Optional</sup> <a name="transitServicePortInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePortInput"></a>

```java
public java.lang.String getTransitServicePortInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `internalServicePort`<sup>Required</sup> <a name="internalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.internalServicePort"></a>

```java
public java.lang.String getInternalServicePort();
```

- *Type:* java.lang.String

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `transitIpId`<sup>Required</sup> <a name="transitIpId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitIpId"></a>

```java
public java.lang.String getTransitIpId();
```

- *Type:* java.lang.String

---

##### `transitServicePort`<sup>Required</sup> <a name="transitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.transitServicePort"></a>

```java
public java.lang.String getTransitServicePort();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateNatDnatRuleV3Config <a name="PrivateNatDnatRuleV3Config" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3Config;

PrivateNatDnatRuleV3Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .gatewayId(java.lang.String)
    .transitIpId(java.lang.String)
//  .description(java.lang.String)
//  .internalServicePort(java.lang.String)
//  .networkInterfaceId(java.lang.String)
//  .privateIpAddress(java.lang.String)
//  .protocol(java.lang.String)
//  .timeouts(PrivateNatDnatRuleV3Timeouts)
//  .transitServicePort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitIpId">transitIpId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.internalServicePort">internalServicePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.networkInterfaceId">networkInterfaceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitServicePort">transitServicePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#gateway_id PrivateNatDnatRuleV3#gateway_id}.

---

##### `transitIpId`<sup>Required</sup> <a name="transitIpId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitIpId"></a>

```java
public java.lang.String getTransitIpId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_ip_id PrivateNatDnatRuleV3#transit_ip_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#description PrivateNatDnatRuleV3#description}.

---

##### `internalServicePort`<sup>Optional</sup> <a name="internalServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.internalServicePort"></a>

```java
public java.lang.String getInternalServicePort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#internal_service_port PrivateNatDnatRuleV3#internal_service_port}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.networkInterfaceId"></a>

```java
public java.lang.String getNetworkInterfaceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#network_interface_id PrivateNatDnatRuleV3#network_interface_id}.

---

##### `privateIpAddress`<sup>Optional</sup> <a name="privateIpAddress" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#private_ip_address PrivateNatDnatRuleV3#private_ip_address}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#protocol PrivateNatDnatRuleV3#protocol}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.timeouts"></a>

```java
public PrivateNatDnatRuleV3Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#timeouts PrivateNatDnatRuleV3#timeouts}

---

##### `transitServicePort`<sup>Optional</sup> <a name="transitServicePort" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Config.property.transitServicePort"></a>

```java
public java.lang.String getTransitServicePort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#transit_service_port PrivateNatDnatRuleV3#transit_service_port}.

---

### PrivateNatDnatRuleV3Timeouts <a name="PrivateNatDnatRuleV3Timeouts" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3Timeouts;

PrivateNatDnatRuleV3Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#create PrivateNatDnatRuleV3#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#delete PrivateNatDnatRuleV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#create PrivateNatDnatRuleV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/private_nat_dnat_rule_v3#delete PrivateNatDnatRuleV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNatDnatRuleV3TimeoutsOutputReference <a name="PrivateNatDnatRuleV3TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.private_nat_dnat_rule_v3.PrivateNatDnatRuleV3TimeoutsOutputReference;

new PrivateNatDnatRuleV3TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|PrivateNatDnatRuleV3Timeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.privateNatDnatRuleV3.PrivateNatDnatRuleV3Timeouts">PrivateNatDnatRuleV3Timeouts</a>

---



