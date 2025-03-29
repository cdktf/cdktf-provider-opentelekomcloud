# `fwRuleV2` Submodule <a name="`fwRuleV2` Submodule" id="@cdktf/provider-opentelekomcloud.fwRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FwRuleV2 <a name="FwRuleV2" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2 opentelekomcloud_fw_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fw_rule_v2.FwRuleV2;

FwRuleV2.Builder.create(Construct scope, java.lang.String id)
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
    .action(java.lang.String)
    .protocol(java.lang.String)
//  .description(java.lang.String)
//  .destinationIpAddress(java.lang.String)
//  .destinationPort(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ipVersion(java.lang.Number)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .sourceIpAddress(java.lang.String)
//  .sourcePort(java.lang.String)
//  .tenantId(java.lang.String)
//  .valueSpecs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#action FwRuleV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#protocol FwRuleV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#description FwRuleV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.destinationIpAddress">destinationIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_ip_address FwRuleV2#destination_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.destinationPort">destinationPort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_port FwRuleV2#destination_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#enabled FwRuleV2#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#id FwRuleV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#ip_version FwRuleV2#ip_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#name FwRuleV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#region FwRuleV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.sourceIpAddress">sourceIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_ip_address FwRuleV2#source_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.sourcePort">sourcePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_port FwRuleV2#source_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#tenant_id FwRuleV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#value_specs FwRuleV2#value_specs}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#action FwRuleV2#action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#protocol FwRuleV2#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#description FwRuleV2#description}.

---

##### `destinationIpAddress`<sup>Optional</sup> <a name="destinationIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.destinationIpAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_ip_address FwRuleV2#destination_ip_address}.

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.destinationPort"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_port FwRuleV2#destination_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#enabled FwRuleV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#id FwRuleV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#ip_version FwRuleV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#name FwRuleV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#region FwRuleV2#region}.

---

##### `sourceIpAddress`<sup>Optional</sup> <a name="sourceIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.sourceIpAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_ip_address FwRuleV2#source_ip_address}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.sourcePort"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_port FwRuleV2#source_port}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.tenantId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#tenant_id FwRuleV2#tenant_id}.

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.Initializer.parameter.valueSpecs"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#value_specs FwRuleV2#value_specs}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetDestinationIpAddress">resetDestinationIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetDestinationPort">resetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetSourceIpAddress">resetSourceIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetSourcePort">resetSourcePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDestinationIpAddress` <a name="resetDestinationIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetDestinationIpAddress"></a>

```java
public void resetDestinationIpAddress()
```

##### `resetDestinationPort` <a name="resetDestinationPort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetDestinationPort"></a>

```java
public void resetDestinationPort()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetId"></a>

```java
public void resetId()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetName"></a>

```java
public void resetName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSourceIpAddress` <a name="resetSourceIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetSourceIpAddress"></a>

```java
public void resetSourceIpAddress()
```

##### `resetSourcePort` <a name="resetSourcePort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetSourcePort"></a>

```java
public void resetSourcePort()
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetTenantId"></a>

```java
public void resetTenantId()
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.resetValueSpecs"></a>

```java
public void resetValueSpecs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FwRuleV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fw_rule_v2.FwRuleV2;

FwRuleV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fw_rule_v2.FwRuleV2;

FwRuleV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fw_rule_v2.FwRuleV2;

FwRuleV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fw_rule_v2.FwRuleV2;

FwRuleV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FwRuleV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FwRuleV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FwRuleV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FwRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FwRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationIpAddressInput">destinationIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationPortInput">destinationPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourceIpAddressInput">sourceIpAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourcePortInput">sourcePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.tenantIdInput">tenantIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationIpAddress">destinationIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationPort">destinationPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.ipVersion">ipVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourceIpAddress">sourceIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourcePort">sourcePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `destinationIpAddressInput`<sup>Optional</sup> <a name="destinationIpAddressInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationIpAddressInput"></a>

```java
public java.lang.String getDestinationIpAddressInput();
```

- *Type:* java.lang.String

---

##### `destinationPortInput`<sup>Optional</sup> <a name="destinationPortInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationPortInput"></a>

```java
public java.lang.String getDestinationPortInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.ipVersionInput"></a>

```java
public java.lang.Number getIpVersionInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `sourceIpAddressInput`<sup>Optional</sup> <a name="sourceIpAddressInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourceIpAddressInput"></a>

```java
public java.lang.String getSourceIpAddressInput();
```

- *Type:* java.lang.String

---

##### `sourcePortInput`<sup>Optional</sup> <a name="sourcePortInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourcePortInput"></a>

```java
public java.lang.String getSourcePortInput();
```

- *Type:* java.lang.String

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.tenantIdInput"></a>

```java
public java.lang.String getTenantIdInput();
```

- *Type:* java.lang.String

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.valueSpecsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `destinationIpAddress`<sup>Required</sup> <a name="destinationIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationIpAddress"></a>

```java
public java.lang.String getDestinationIpAddress();
```

- *Type:* java.lang.String

---

##### `destinationPort`<sup>Required</sup> <a name="destinationPort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.destinationPort"></a>

```java
public java.lang.String getDestinationPort();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.ipVersion"></a>

```java
public java.lang.Number getIpVersion();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `sourceIpAddress`<sup>Required</sup> <a name="sourceIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourceIpAddress"></a>

```java
public java.lang.String getSourceIpAddress();
```

- *Type:* java.lang.String

---

##### `sourcePort`<sup>Required</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.sourcePort"></a>

```java
public java.lang.String getSourcePort();
```

- *Type:* java.lang.String

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.valueSpecs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FwRuleV2Config <a name="FwRuleV2Config" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opentelekomcloud.fw_rule_v2.FwRuleV2Config;

FwRuleV2Config.builder()
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
    .action(java.lang.String)
    .protocol(java.lang.String)
//  .description(java.lang.String)
//  .destinationIpAddress(java.lang.String)
//  .destinationPort(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ipVersion(java.lang.Number)
//  .name(java.lang.String)
//  .region(java.lang.String)
//  .sourceIpAddress(java.lang.String)
//  .sourcePort(java.lang.String)
//  .tenantId(java.lang.String)
//  .valueSpecs(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#action FwRuleV2#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#protocol FwRuleV2#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#description FwRuleV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.destinationIpAddress">destinationIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_ip_address FwRuleV2#destination_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.destinationPort">destinationPort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_port FwRuleV2#destination_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#enabled FwRuleV2#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#id FwRuleV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.ipVersion">ipVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#ip_version FwRuleV2#ip_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#name FwRuleV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#region FwRuleV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.sourceIpAddress">sourceIpAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_ip_address FwRuleV2#source_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.sourcePort">sourcePort</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_port FwRuleV2#source_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#tenant_id FwRuleV2#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.valueSpecs">valueSpecs</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#value_specs FwRuleV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#action FwRuleV2#action}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#protocol FwRuleV2#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#description FwRuleV2#description}.

---

##### `destinationIpAddress`<sup>Optional</sup> <a name="destinationIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.destinationIpAddress"></a>

```java
public java.lang.String getDestinationIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_ip_address FwRuleV2#destination_ip_address}.

---

##### `destinationPort`<sup>Optional</sup> <a name="destinationPort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.destinationPort"></a>

```java
public java.lang.String getDestinationPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#destination_port FwRuleV2#destination_port}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#enabled FwRuleV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#id FwRuleV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.ipVersion"></a>

```java
public java.lang.Number getIpVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#ip_version FwRuleV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#name FwRuleV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#region FwRuleV2#region}.

---

##### `sourceIpAddress`<sup>Optional</sup> <a name="sourceIpAddress" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.sourceIpAddress"></a>

```java
public java.lang.String getSourceIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_ip_address FwRuleV2#source_ip_address}.

---

##### `sourcePort`<sup>Optional</sup> <a name="sourcePort" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.sourcePort"></a>

```java
public java.lang.String getSourcePort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#source_port FwRuleV2#source_port}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#tenant_id FwRuleV2#tenant_id}.

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@cdktf/provider-opentelekomcloud.fwRuleV2.FwRuleV2Config.property.valueSpecs"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getValueSpecs();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/fw_rule_v2#value_specs FwRuleV2#value_specs}.

---



