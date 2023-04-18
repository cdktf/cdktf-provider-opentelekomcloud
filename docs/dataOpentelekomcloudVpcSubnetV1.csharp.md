# `data_opentelekomcloud_vpc_subnet_v1`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_vpc_subnet_v1`](https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1).

# `dataOpentelekomcloudVpcSubnetV1` Submodule <a name="`dataOpentelekomcloudVpcSubnetV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudVpcSubnetV1 <a name="DataOpentelekomcloudVpcSubnetV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1 opentelekomcloud_vpc_subnet_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudVpcSubnetV1(Construct Scope, string Id, DataOpentelekomcloudVpcSubnetV1Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config">DataOpentelekomcloudVpcSubnetV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config">DataOpentelekomcloudVpcSubnetV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetGatewayIp">ResetGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetPrimaryDns">ResetPrimaryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetSecondaryDns">ResetSecondaryDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetVpcId">ResetVpcId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetGatewayIp` <a name="ResetGatewayIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetGatewayIp"></a>

```csharp
private void ResetGatewayIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPrimaryDns` <a name="ResetPrimaryDns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetPrimaryDns"></a>

```csharp
private void ResetPrimaryDns()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecondaryDns` <a name="ResetSecondaryDns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetSecondaryDns"></a>

```csharp
private void ResetSecondaryDns()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.resetVpcId"></a>

```csharp
private void ResetVpcId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudVpcSubnetV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudVpcSubnetV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

DataOpentelekomcloudVpcSubnetV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dhcpEnable">DhcpEnable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dnsList">DnsList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIpInput">GatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDnsInput">PrimaryDnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDnsInput">SecondaryDnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIp">GatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDns">PrimaryDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDns">SecondaryDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DhcpEnable`<sup>Required</sup> <a name="DhcpEnable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dhcpEnable"></a>

```csharp
public IResolvable DhcpEnable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DnsList`<sup>Required</sup> <a name="DnsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.dnsList"></a>

```csharp
public string[] DnsList { get; }
```

- *Type:* string[]

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `GatewayIpInput`<sup>Optional</sup> <a name="GatewayIpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIpInput"></a>

```csharp
public string GatewayIpInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryDnsInput`<sup>Optional</sup> <a name="PrimaryDnsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDnsInput"></a>

```csharp
public string PrimaryDnsInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecondaryDnsInput`<sup>Optional</sup> <a name="SecondaryDnsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDnsInput"></a>

```csharp
public string SecondaryDnsInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `GatewayIp`<sup>Required</sup> <a name="GatewayIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.gatewayIp"></a>

```csharp
public string GatewayIp { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryDns`<sup>Required</sup> <a name="PrimaryDns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.primaryDns"></a>

```csharp
public string PrimaryDns { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecondaryDns`<sup>Required</sup> <a name="SecondaryDns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.secondaryDns"></a>

```csharp
public string SecondaryDns { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudVpcSubnetV1Config <a name="DataOpentelekomcloudVpcSubnetV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new DataOpentelekomcloudVpcSubnetV1Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailabilityZone = null,
    string Cidr = null,
    string GatewayIp = null,
    string Id = null,
    string Name = null,
    string PrimaryDns = null,
    string Region = null,
    string SecondaryDns = null,
    string Status = null,
    string VpcId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#availability_zone DataOpentelekomcloudVpcSubnetV1#availability_zone}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.cidr">Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#cidr DataOpentelekomcloudVpcSubnetV1#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.gatewayIp">GatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#gateway_ip DataOpentelekomcloudVpcSubnetV1#gateway_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#id DataOpentelekomcloudVpcSubnetV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#name DataOpentelekomcloudVpcSubnetV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.primaryDns">PrimaryDns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#primary_dns DataOpentelekomcloudVpcSubnetV1#primary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#region DataOpentelekomcloudVpcSubnetV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.secondaryDns">SecondaryDns</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#secondary_dns DataOpentelekomcloudVpcSubnetV1#secondary_dns}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#status DataOpentelekomcloudVpcSubnetV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#vpc_id DataOpentelekomcloudVpcSubnetV1#vpc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#availability_zone DataOpentelekomcloudVpcSubnetV1#availability_zone}.

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#cidr DataOpentelekomcloudVpcSubnetV1#cidr}.

---

##### `GatewayIp`<sup>Optional</sup> <a name="GatewayIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.gatewayIp"></a>

```csharp
public string GatewayIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#gateway_ip DataOpentelekomcloudVpcSubnetV1#gateway_ip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#id DataOpentelekomcloudVpcSubnetV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#name DataOpentelekomcloudVpcSubnetV1#name}.

---

##### `PrimaryDns`<sup>Optional</sup> <a name="PrimaryDns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.primaryDns"></a>

```csharp
public string PrimaryDns { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#primary_dns DataOpentelekomcloudVpcSubnetV1#primary_dns}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#region DataOpentelekomcloudVpcSubnetV1#region}.

---

##### `SecondaryDns`<sup>Optional</sup> <a name="SecondaryDns" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.secondaryDns"></a>

```csharp
public string SecondaryDns { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#secondary_dns DataOpentelekomcloudVpcSubnetV1#secondary_dns}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#status DataOpentelekomcloudVpcSubnetV1#status}.

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudVpcSubnetV1.DataOpentelekomcloudVpcSubnetV1Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/vpc_subnet_v1#vpc_id DataOpentelekomcloudVpcSubnetV1#vpc_id}.

---



