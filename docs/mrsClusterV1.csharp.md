# `opentelekomcloud_mrs_cluster_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_mrs_cluster_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1).

# `mrsClusterV1` Submodule <a name="`mrsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.mrsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrsClusterV1 <a name="MrsClusterV1" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1 opentelekomcloud_mrs_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1(Construct Scope, string Id, MrsClusterV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config">MrsClusterV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config">MrsClusterV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs">PutAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts">PutBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList">PutComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs">ResetAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts">ResetBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret">ResetClusterAdminSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType">ResetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount">ResetCoreDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize">ResetCoreDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType">ResetCoreDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection">ResetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount">ResetMasterDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize">ResetMasterDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType">ResetMasterDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType">ResetVolumeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAddJobs` <a name="PutAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs"></a>

```csharp
private void PutAddJobs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs.parameter.value"></a>

- *Type:* object

---

##### `PutBootstrapScripts` <a name="PutBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts"></a>

```csharp
private void PutBootstrapScripts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts.parameter.value"></a>

- *Type:* object

---

##### `PutComponentList` <a name="PutComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList"></a>

```csharp
private void PutComponentList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts"></a>

```csharp
private void PutTimeouts(MrsClusterV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---

##### `ResetAddJobs` <a name="ResetAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs"></a>

```csharp
private void ResetAddJobs()
```

##### `ResetBootstrapScripts` <a name="ResetBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts"></a>

```csharp
private void ResetBootstrapScripts()
```

##### `ResetClusterAdminSecret` <a name="ResetClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret"></a>

```csharp
private void ResetClusterAdminSecret()
```

##### `ResetClusterType` <a name="ResetClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType"></a>

```csharp
private void ResetClusterType()
```

##### `ResetCoreDataVolumeCount` <a name="ResetCoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount"></a>

```csharp
private void ResetCoreDataVolumeCount()
```

##### `ResetCoreDataVolumeSize` <a name="ResetCoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize"></a>

```csharp
private void ResetCoreDataVolumeSize()
```

##### `ResetCoreDataVolumeType` <a name="ResetCoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType"></a>

```csharp
private void ResetCoreDataVolumeType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogCollection` <a name="ResetLogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection"></a>

```csharp
private void ResetLogCollection()
```

##### `ResetMasterDataVolumeCount` <a name="ResetMasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount"></a>

```csharp
private void ResetMasterDataVolumeCount()
```

##### `ResetMasterDataVolumeSize` <a name="ResetMasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize"></a>

```csharp
private void ResetMasterDataVolumeSize()
```

##### `ResetMasterDataVolumeType` <a name="ResetMasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType"></a>

```csharp
private void ResetMasterDataVolumeType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```

##### `ResetVolumeType` <a name="ResetVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType"></a>

```csharp
private void ResetVolumeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

MrsClusterV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

MrsClusterV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

MrsClusterV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs">AddJobs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName">AvailableZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts">BootstrapScripts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime">ChargingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState">ClusterState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList">ComponentList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList">MrsClusterV1ComponentListList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId">CoreNodeProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId">CoreNodeSpecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt">CreateAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo">ErrorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp">ExternalAlternateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp">ExternalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee">Fee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion">HadoopVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp">InternalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp">MasterNodeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId">MasterNodeProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId">MasterNodeSpecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId">OrderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst">PrivateIpFirst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark">Remark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId">SecurityGroupsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId">SlaveSecurityGroupsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt">UpdateAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc">Vnc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput">AddJobsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput">AvailableZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput">BillingTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput">BootstrapScriptsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput">ClusterAdminSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput">ClusterTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput">ClusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput">ComponentListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput">CoreDataVolumeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput">CoreDataVolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput">CoreDataVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput">CoreNodeNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput">CoreNodeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput">LogCollectionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput">MasterDataVolumeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput">MasterDataVolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput">MasterDataVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput">MasterNodeNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput">MasterNodeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput">NodePublicCertNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput">SafeModeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput">VolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId">AvailableZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType">BillingType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret">ClusterAdminSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType">ClusterType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount">CoreDataVolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize">CoreDataVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType">CoreDataVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum">CoreNodeNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize">CoreNodeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection">LogCollection</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount">MasterDataVolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize">MasterDataVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType">MasterDataVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum">MasterNodeNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize">MasterNodeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName">NodePublicCertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode">SafeMode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AddJobs`<sup>Required</sup> <a name="AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs"></a>

```csharp
public MrsClusterV1AddJobsList AddJobs { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a>

---

##### `AvailableZoneName`<sup>Required</sup> <a name="AvailableZoneName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName"></a>

```csharp
public string AvailableZoneName { get; }
```

- *Type:* string

---

##### `BootstrapScripts`<sup>Required</sup> <a name="BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts"></a>

```csharp
public MrsClusterV1BootstrapScriptsList BootstrapScripts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a>

---

##### `ChargingStartTime`<sup>Required</sup> <a name="ChargingStartTime" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime"></a>

```csharp
public string ChargingStartTime { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ClusterState`<sup>Required</sup> <a name="ClusterState" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState"></a>

```csharp
public string ClusterState { get; }
```

- *Type:* string

---

##### `ComponentList`<sup>Required</sup> <a name="ComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList"></a>

```csharp
public MrsClusterV1ComponentListList ComponentList { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList">MrsClusterV1ComponentListList</a>

---

##### `CoreNodeProductId`<sup>Required</sup> <a name="CoreNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId"></a>

```csharp
public string CoreNodeProductId { get; }
```

- *Type:* string

---

##### `CoreNodeSpecId`<sup>Required</sup> <a name="CoreNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId"></a>

```csharp
public string CoreNodeSpecId { get; }
```

- *Type:* string

---

##### `CreateAt`<sup>Required</sup> <a name="CreateAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt"></a>

```csharp
public string CreateAt { get; }
```

- *Type:* string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `ErrorInfo`<sup>Required</sup> <a name="ErrorInfo" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo"></a>

```csharp
public string ErrorInfo { get; }
```

- *Type:* string

---

##### `ExternalAlternateIp`<sup>Required</sup> <a name="ExternalAlternateIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp"></a>

```csharp
public string ExternalAlternateIp { get; }
```

- *Type:* string

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp"></a>

```csharp
public string ExternalIp { get; }
```

- *Type:* string

---

##### `Fee`<sup>Required</sup> <a name="Fee" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee"></a>

```csharp
public string Fee { get; }
```

- *Type:* string

---

##### `HadoopVersion`<sup>Required</sup> <a name="HadoopVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion"></a>

```csharp
public string HadoopVersion { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InternalIp`<sup>Required</sup> <a name="InternalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp"></a>

```csharp
public string InternalIp { get; }
```

- *Type:* string

---

##### `MasterNodeIp`<sup>Required</sup> <a name="MasterNodeIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp"></a>

```csharp
public string MasterNodeIp { get; }
```

- *Type:* string

---

##### `MasterNodeProductId`<sup>Required</sup> <a name="MasterNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId"></a>

```csharp
public string MasterNodeProductId { get; }
```

- *Type:* string

---

##### `MasterNodeSpecId`<sup>Required</sup> <a name="MasterNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId"></a>

```csharp
public string MasterNodeSpecId { get; }
```

- *Type:* string

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId"></a>

```csharp
public string OrderId { get; }
```

- *Type:* string

---

##### `PrivateIpFirst`<sup>Required</sup> <a name="PrivateIpFirst" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst"></a>

```csharp
public string PrivateIpFirst { get; }
```

- *Type:* string

---

##### `Remark`<sup>Required</sup> <a name="Remark" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark"></a>

```csharp
public string Remark { get; }
```

- *Type:* string

---

##### `SecurityGroupsId`<sup>Required</sup> <a name="SecurityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId"></a>

```csharp
public string SecurityGroupsId { get; }
```

- *Type:* string

---

##### `SlaveSecurityGroupsId`<sup>Required</sup> <a name="SlaveSecurityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId"></a>

```csharp
public string SlaveSecurityGroupsId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts"></a>

```csharp
public MrsClusterV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a>

---

##### `UpdateAt`<sup>Required</sup> <a name="UpdateAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt"></a>

```csharp
public string UpdateAt { get; }
```

- *Type:* string

---

##### `Vnc`<sup>Required</sup> <a name="Vnc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc"></a>

```csharp
public string Vnc { get; }
```

- *Type:* string

---

##### `AddJobsInput`<sup>Optional</sup> <a name="AddJobsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput"></a>

```csharp
public object AddJobsInput { get; }
```

- *Type:* object

---

##### `AvailableZoneIdInput`<sup>Optional</sup> <a name="AvailableZoneIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput"></a>

```csharp
public string AvailableZoneIdInput { get; }
```

- *Type:* string

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput"></a>

```csharp
public double BillingTypeInput { get; }
```

- *Type:* double

---

##### `BootstrapScriptsInput`<sup>Optional</sup> <a name="BootstrapScriptsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput"></a>

```csharp
public object BootstrapScriptsInput { get; }
```

- *Type:* object

---

##### `ClusterAdminSecretInput`<sup>Optional</sup> <a name="ClusterAdminSecretInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput"></a>

```csharp
public string ClusterAdminSecretInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ClusterTypeInput`<sup>Optional</sup> <a name="ClusterTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput"></a>

```csharp
public double ClusterTypeInput { get; }
```

- *Type:* double

---

##### `ClusterVersionInput`<sup>Optional</sup> <a name="ClusterVersionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput"></a>

```csharp
public string ClusterVersionInput { get; }
```

- *Type:* string

---

##### `ComponentListInput`<sup>Optional</sup> <a name="ComponentListInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput"></a>

```csharp
public object ComponentListInput { get; }
```

- *Type:* object

---

##### `CoreDataVolumeCountInput`<sup>Optional</sup> <a name="CoreDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput"></a>

```csharp
public double CoreDataVolumeCountInput { get; }
```

- *Type:* double

---

##### `CoreDataVolumeSizeInput`<sup>Optional</sup> <a name="CoreDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput"></a>

```csharp
public double CoreDataVolumeSizeInput { get; }
```

- *Type:* double

---

##### `CoreDataVolumeTypeInput`<sup>Optional</sup> <a name="CoreDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput"></a>

```csharp
public string CoreDataVolumeTypeInput { get; }
```

- *Type:* string

---

##### `CoreNodeNumInput`<sup>Optional</sup> <a name="CoreNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput"></a>

```csharp
public double CoreNodeNumInput { get; }
```

- *Type:* double

---

##### `CoreNodeSizeInput`<sup>Optional</sup> <a name="CoreNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput"></a>

```csharp
public string CoreNodeSizeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogCollectionInput`<sup>Optional</sup> <a name="LogCollectionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput"></a>

```csharp
public double LogCollectionInput { get; }
```

- *Type:* double

---

##### `MasterDataVolumeCountInput`<sup>Optional</sup> <a name="MasterDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput"></a>

```csharp
public double MasterDataVolumeCountInput { get; }
```

- *Type:* double

---

##### `MasterDataVolumeSizeInput`<sup>Optional</sup> <a name="MasterDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput"></a>

```csharp
public double MasterDataVolumeSizeInput { get; }
```

- *Type:* double

---

##### `MasterDataVolumeTypeInput`<sup>Optional</sup> <a name="MasterDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput"></a>

```csharp
public string MasterDataVolumeTypeInput { get; }
```

- *Type:* string

---

##### `MasterNodeNumInput`<sup>Optional</sup> <a name="MasterNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput"></a>

```csharp
public double MasterNodeNumInput { get; }
```

- *Type:* double

---

##### `MasterNodeSizeInput`<sup>Optional</sup> <a name="MasterNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput"></a>

```csharp
public string MasterNodeSizeInput { get; }
```

- *Type:* string

---

##### `NodePublicCertNameInput`<sup>Optional</sup> <a name="NodePublicCertNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput"></a>

```csharp
public string NodePublicCertNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SafeModeInput`<sup>Optional</sup> <a name="SafeModeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput"></a>

```csharp
public double SafeModeInput { get; }
```

- *Type:* double

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeTypeInput`<sup>Optional</sup> <a name="VolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput"></a>

```csharp
public string VolumeTypeInput { get; }
```

- *Type:* string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `AvailableZoneId`<sup>Required</sup> <a name="AvailableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId"></a>

```csharp
public string AvailableZoneId { get; }
```

- *Type:* string

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType"></a>

```csharp
public double BillingType { get; }
```

- *Type:* double

---

##### `ClusterAdminSecret`<sup>Required</sup> <a name="ClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret"></a>

```csharp
public string ClusterAdminSecret { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType"></a>

```csharp
public double ClusterType { get; }
```

- *Type:* double

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; }
```

- *Type:* string

---

##### `CoreDataVolumeCount`<sup>Required</sup> <a name="CoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount"></a>

```csharp
public double CoreDataVolumeCount { get; }
```

- *Type:* double

---

##### `CoreDataVolumeSize`<sup>Required</sup> <a name="CoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize"></a>

```csharp
public double CoreDataVolumeSize { get; }
```

- *Type:* double

---

##### `CoreDataVolumeType`<sup>Required</sup> <a name="CoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType"></a>

```csharp
public string CoreDataVolumeType { get; }
```

- *Type:* string

---

##### `CoreNodeNum`<sup>Required</sup> <a name="CoreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum"></a>

```csharp
public double CoreNodeNum { get; }
```

- *Type:* double

---

##### `CoreNodeSize`<sup>Required</sup> <a name="CoreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize"></a>

```csharp
public string CoreNodeSize { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogCollection`<sup>Required</sup> <a name="LogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection"></a>

```csharp
public double LogCollection { get; }
```

- *Type:* double

---

##### `MasterDataVolumeCount`<sup>Required</sup> <a name="MasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount"></a>

```csharp
public double MasterDataVolumeCount { get; }
```

- *Type:* double

---

##### `MasterDataVolumeSize`<sup>Required</sup> <a name="MasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize"></a>

```csharp
public double MasterDataVolumeSize { get; }
```

- *Type:* double

---

##### `MasterDataVolumeType`<sup>Required</sup> <a name="MasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType"></a>

```csharp
public string MasterDataVolumeType { get; }
```

- *Type:* string

---

##### `MasterNodeNum`<sup>Required</sup> <a name="MasterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum"></a>

```csharp
public double MasterNodeNum { get; }
```

- *Type:* double

---

##### `MasterNodeSize`<sup>Required</sup> <a name="MasterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize"></a>

```csharp
public string MasterNodeSize { get; }
```

- *Type:* string

---

##### `NodePublicCertName`<sup>Required</sup> <a name="NodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName"></a>

```csharp
public string NodePublicCertName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SafeMode`<sup>Required</sup> <a name="SafeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode"></a>

```csharp
public double SafeMode { get; }
```

- *Type:* double

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MrsClusterV1AddJobs <a name="MrsClusterV1AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1AddJobs {
    string JarPath,
    string JobName,
    double JobType,
    object SubmitJobOnceClusterRun,
    string Arguments = null,
    string FileAction = null,
    string HiveScriptPath = null,
    string Hql = null,
    string Input = null,
    string JobLog = null,
    string Output = null,
    object ShutdownCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath">JarPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName">JobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType">JobType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun">SubmitJobOnceClusterRun</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments">Arguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction">FileAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath">HiveScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql">Hql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input">Input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog">JobLog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output">Output</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster">ShutdownCluster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}. |

---

##### `JarPath`<sup>Required</sup> <a name="JarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath"></a>

```csharp
public string JarPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}.

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName"></a>

```csharp
public string JobName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}.

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType"></a>

```csharp
public double JobType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}.

---

##### `SubmitJobOnceClusterRun`<sup>Required</sup> <a name="SubmitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun"></a>

```csharp
public object SubmitJobOnceClusterRun { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments"></a>

```csharp
public string Arguments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}.

---

##### `FileAction`<sup>Optional</sup> <a name="FileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction"></a>

```csharp
public string FileAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}.

---

##### `HiveScriptPath`<sup>Optional</sup> <a name="HiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath"></a>

```csharp
public string HiveScriptPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}.

---

##### `Hql`<sup>Optional</sup> <a name="Hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql"></a>

```csharp
public string Hql { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}.

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}.

---

##### `JobLog`<sup>Optional</sup> <a name="JobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog"></a>

```csharp
public string JobLog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output"></a>

```csharp
public string Output { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}.

---

##### `ShutdownCluster`<sup>Optional</sup> <a name="ShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster"></a>

```csharp
public object ShutdownCluster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}.

---

### MrsClusterV1BootstrapScripts <a name="MrsClusterV1BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1BootstrapScripts {
    string FailAction,
    string Name,
    string[] Nodes,
    string Uri,
    object ActiveMaster = null,
    object BeforeComponentStart = null,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction">FailAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes">Nodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster">ActiveMaster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart">BeforeComponentStart</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters">Parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}. |

---

##### `FailAction`<sup>Required</sup> <a name="FailAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction"></a>

```csharp
public string FailAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}.

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes"></a>

```csharp
public string[] Nodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}.

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}.

---

##### `ActiveMaster`<sup>Optional</sup> <a name="ActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster"></a>

```csharp
public object ActiveMaster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}.

---

##### `BeforeComponentStart`<sup>Optional</sup> <a name="BeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart"></a>

```csharp
public object BeforeComponentStart { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}.

---

### MrsClusterV1ComponentList <a name="MrsClusterV1ComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1ComponentList {
    string ComponentName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList.property.componentName">ComponentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}. |

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentList.property.componentName"></a>

```csharp
public string ComponentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}.

---

### MrsClusterV1Config <a name="MrsClusterV1Config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AvailableZoneId,
    double BillingType,
    string ClusterName,
    string ClusterVersion,
    object ComponentList,
    double CoreNodeNum,
    string CoreNodeSize,
    double MasterNodeNum,
    string MasterNodeSize,
    string NodePublicCertName,
    double SafeMode,
    string SubnetId,
    string VpcId,
    object AddJobs = null,
    object BootstrapScripts = null,
    string ClusterAdminSecret = null,
    double ClusterType = null,
    double CoreDataVolumeCount = null,
    double CoreDataVolumeSize = null,
    string CoreDataVolumeType = null,
    string Id = null,
    double LogCollection = null,
    double MasterDataVolumeCount = null,
    double MasterDataVolumeSize = null,
    string MasterDataVolumeType = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MrsClusterV1Timeouts Timeouts = null,
    double VolumeSize = null,
    string VolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId">AvailableZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType">BillingType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion">ClusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList">ComponentList</a></code> | <code>object</code> | component_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum">CoreNodeNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize">CoreNodeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum">MasterNodeNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize">MasterNodeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName">NodePublicCertName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode">SafeMode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs">AddJobs</a></code> | <code>object</code> | add_jobs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts">BootstrapScripts</a></code> | <code>object</code> | bootstrap_scripts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret">ClusterAdminSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType">ClusterType</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount">CoreDataVolumeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize">CoreDataVolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType">CoreDataVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection">LogCollection</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount">MasterDataVolumeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize">MasterDataVolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType">MasterDataVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType">VolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AvailableZoneId`<sup>Required</sup> <a name="AvailableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId"></a>

```csharp
public string AvailableZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}.

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType"></a>

```csharp
public double BillingType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}.

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}.

---

##### `ClusterVersion`<sup>Required</sup> <a name="ClusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion"></a>

```csharp
public string ClusterVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}.

---

##### `ComponentList`<sup>Required</sup> <a name="ComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList"></a>

```csharp
public object ComponentList { get; set; }
```

- *Type:* object

component_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#component_list MrsClusterV1#component_list}

---

##### `CoreNodeNum`<sup>Required</sup> <a name="CoreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum"></a>

```csharp
public double CoreNodeNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}.

---

##### `CoreNodeSize`<sup>Required</sup> <a name="CoreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize"></a>

```csharp
public string CoreNodeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}.

---

##### `MasterNodeNum`<sup>Required</sup> <a name="MasterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum"></a>

```csharp
public double MasterNodeNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}.

---

##### `MasterNodeSize`<sup>Required</sup> <a name="MasterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize"></a>

```csharp
public string MasterNodeSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}.

---

##### `NodePublicCertName`<sup>Required</sup> <a name="NodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName"></a>

```csharp
public string NodePublicCertName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}.

---

##### `SafeMode`<sup>Required</sup> <a name="SafeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode"></a>

```csharp
public double SafeMode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}.

---

##### `AddJobs`<sup>Optional</sup> <a name="AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs"></a>

```csharp
public object AddJobs { get; set; }
```

- *Type:* object

add_jobs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}

---

##### `BootstrapScripts`<sup>Optional</sup> <a name="BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts"></a>

```csharp
public object BootstrapScripts { get; set; }
```

- *Type:* object

bootstrap_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}

---

##### `ClusterAdminSecret`<sup>Optional</sup> <a name="ClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret"></a>

```csharp
public string ClusterAdminSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}.

---

##### `ClusterType`<sup>Optional</sup> <a name="ClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType"></a>

```csharp
public double ClusterType { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}.

---

##### `CoreDataVolumeCount`<sup>Optional</sup> <a name="CoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount"></a>

```csharp
public double CoreDataVolumeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}.

---

##### `CoreDataVolumeSize`<sup>Optional</sup> <a name="CoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize"></a>

```csharp
public double CoreDataVolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}.

---

##### `CoreDataVolumeType`<sup>Optional</sup> <a name="CoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType"></a>

```csharp
public string CoreDataVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogCollection`<sup>Optional</sup> <a name="LogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection"></a>

```csharp
public double LogCollection { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}.

---

##### `MasterDataVolumeCount`<sup>Optional</sup> <a name="MasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount"></a>

```csharp
public double MasterDataVolumeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}.

---

##### `MasterDataVolumeSize`<sup>Optional</sup> <a name="MasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize"></a>

```csharp
public double MasterDataVolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}.

---

##### `MasterDataVolumeType`<sup>Optional</sup> <a name="MasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType"></a>

```csharp
public string MasterDataVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts"></a>

```csharp
public MrsClusterV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}.

---

##### `VolumeType`<sup>Optional</sup> <a name="VolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType"></a>

```csharp
public string VolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}.

---

### MrsClusterV1Timeouts <a name="MrsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.3/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrsClusterV1AddJobsList <a name="MrsClusterV1AddJobsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1AddJobsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get"></a>

```csharp
private MrsClusterV1AddJobsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MrsClusterV1AddJobsOutputReference <a name="MrsClusterV1AddJobsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1AddJobsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction">ResetFileAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath">ResetHiveScriptPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql">ResetHql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog">ResetJobLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster">ResetShutdownCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments"></a>

```csharp
private void ResetArguments()
```

##### `ResetFileAction` <a name="ResetFileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction"></a>

```csharp
private void ResetFileAction()
```

##### `ResetHiveScriptPath` <a name="ResetHiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath"></a>

```csharp
private void ResetHiveScriptPath()
```

##### `ResetHql` <a name="ResetHql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql"></a>

```csharp
private void ResetHql()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetJobLog` <a name="ResetJobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog"></a>

```csharp
private void ResetJobLog()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetShutdownCluster` <a name="ResetShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster"></a>

```csharp
private void ResetShutdownCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput">ArgumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput">FileActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput">HiveScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput">HqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput">JarPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput">JobLogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput">JobTypeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput">OutputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput">ShutdownClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput">SubmitJobOnceClusterRunInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments">Arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction">FileAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath">HiveScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql">Hql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath">JarPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog">JobLog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName">JobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType">JobType</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output">Output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster">ShutdownCluster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun">SubmitJobOnceClusterRun</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput"></a>

```csharp
public string ArgumentsInput { get; }
```

- *Type:* string

---

##### `FileActionInput`<sup>Optional</sup> <a name="FileActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput"></a>

```csharp
public string FileActionInput { get; }
```

- *Type:* string

---

##### `HiveScriptPathInput`<sup>Optional</sup> <a name="HiveScriptPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput"></a>

```csharp
public string HiveScriptPathInput { get; }
```

- *Type:* string

---

##### `HqlInput`<sup>Optional</sup> <a name="HqlInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput"></a>

```csharp
public string HqlInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `JarPathInput`<sup>Optional</sup> <a name="JarPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput"></a>

```csharp
public string JarPathInput { get; }
```

- *Type:* string

---

##### `JobLogInput`<sup>Optional</sup> <a name="JobLogInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput"></a>

```csharp
public string JobLogInput { get; }
```

- *Type:* string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput"></a>

```csharp
public string JobNameInput { get; }
```

- *Type:* string

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput"></a>

```csharp
public double JobTypeInput { get; }
```

- *Type:* double

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput"></a>

```csharp
public string OutputInput { get; }
```

- *Type:* string

---

##### `ShutdownClusterInput`<sup>Optional</sup> <a name="ShutdownClusterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput"></a>

```csharp
public object ShutdownClusterInput { get; }
```

- *Type:* object

---

##### `SubmitJobOnceClusterRunInput`<sup>Optional</sup> <a name="SubmitJobOnceClusterRunInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput"></a>

```csharp
public object SubmitJobOnceClusterRunInput { get; }
```

- *Type:* object

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments"></a>

```csharp
public string Arguments { get; }
```

- *Type:* string

---

##### `FileAction`<sup>Required</sup> <a name="FileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction"></a>

```csharp
public string FileAction { get; }
```

- *Type:* string

---

##### `HiveScriptPath`<sup>Required</sup> <a name="HiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath"></a>

```csharp
public string HiveScriptPath { get; }
```

- *Type:* string

---

##### `Hql`<sup>Required</sup> <a name="Hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql"></a>

```csharp
public string Hql { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `JarPath`<sup>Required</sup> <a name="JarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath"></a>

```csharp
public string JarPath { get; }
```

- *Type:* string

---

##### `JobLog`<sup>Required</sup> <a name="JobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog"></a>

```csharp
public string JobLog { get; }
```

- *Type:* string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName"></a>

```csharp
public string JobName { get; }
```

- *Type:* string

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType"></a>

```csharp
public double JobType { get; }
```

- *Type:* double

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output"></a>

```csharp
public string Output { get; }
```

- *Type:* string

---

##### `ShutdownCluster`<sup>Required</sup> <a name="ShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster"></a>

```csharp
public object ShutdownCluster { get; }
```

- *Type:* object

---

##### `SubmitJobOnceClusterRun`<sup>Required</sup> <a name="SubmitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun"></a>

```csharp
public object SubmitJobOnceClusterRun { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MrsClusterV1BootstrapScriptsList <a name="MrsClusterV1BootstrapScriptsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1BootstrapScriptsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get"></a>

```csharp
private MrsClusterV1BootstrapScriptsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MrsClusterV1BootstrapScriptsOutputReference <a name="MrsClusterV1BootstrapScriptsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1BootstrapScriptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster">ResetActiveMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart">ResetBeforeComponentStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveMaster` <a name="ResetActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster"></a>

```csharp
private void ResetActiveMaster()
```

##### `ResetBeforeComponentStart` <a name="ResetBeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart"></a>

```csharp
private void ResetBeforeComponentStart()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput">ActiveMasterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput">BeforeComponentStartInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput">FailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput">NodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster">ActiveMaster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart">BeforeComponentStart</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction">FailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes">Nodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveMasterInput`<sup>Optional</sup> <a name="ActiveMasterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput"></a>

```csharp
public object ActiveMasterInput { get; }
```

- *Type:* object

---

##### `BeforeComponentStartInput`<sup>Optional</sup> <a name="BeforeComponentStartInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput"></a>

```csharp
public object BeforeComponentStartInput { get; }
```

- *Type:* object

---

##### `FailActionInput`<sup>Optional</sup> <a name="FailActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput"></a>

```csharp
public string FailActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodesInput`<sup>Optional</sup> <a name="NodesInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput"></a>

```csharp
public string[] NodesInput { get; }
```

- *Type:* string[]

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `ActiveMaster`<sup>Required</sup> <a name="ActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster"></a>

```csharp
public object ActiveMaster { get; }
```

- *Type:* object

---

##### `BeforeComponentStart`<sup>Required</sup> <a name="BeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart"></a>

```csharp
public object BeforeComponentStart { get; }
```

- *Type:* object

---

##### `FailAction`<sup>Required</sup> <a name="FailAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction"></a>

```csharp
public string FailAction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes"></a>

```csharp
public string[] Nodes { get; }
```

- *Type:* string[]

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MrsClusterV1ComponentListList <a name="MrsClusterV1ComponentListList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1ComponentListList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.get"></a>

```csharp
private MrsClusterV1ComponentListOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MrsClusterV1ComponentListOutputReference <a name="MrsClusterV1ComponentListOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1ComponentListOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentDesc">ComponentDesc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentId">ComponentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentVersion">ComponentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentNameInput">ComponentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentName">ComponentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentDesc`<sup>Required</sup> <a name="ComponentDesc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentDesc"></a>

```csharp
public string ComponentDesc { get; }
```

- *Type:* string

---

##### `ComponentId`<sup>Required</sup> <a name="ComponentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentId"></a>

```csharp
public string ComponentId { get; }
```

- *Type:* string

---

##### `ComponentVersion`<sup>Required</sup> <a name="ComponentVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentVersion"></a>

```csharp
public string ComponentVersion { get; }
```

- *Type:* string

---

##### `ComponentNameInput`<sup>Optional</sup> <a name="ComponentNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentNameInput"></a>

```csharp
public string ComponentNameInput { get; }
```

- *Type:* string

---

##### `ComponentName`<sup>Required</sup> <a name="ComponentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.componentName"></a>

```csharp
public string ComponentName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MrsClusterV1TimeoutsOutputReference <a name="MrsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new MrsClusterV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



