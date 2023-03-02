# `rtsSoftwareDeploymentV1` Submodule <a name="`rtsSoftwareDeploymentV1` Submodule" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtsSoftwareDeploymentV1 <a name="RtsSoftwareDeploymentV1" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1 opentelekomcloud_rts_software_deployment_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RtsSoftwareDeploymentV1(Construct Scope, string Id, RtsSoftwareDeploymentV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config">RtsSoftwareDeploymentV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config">RtsSoftwareDeploymentV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetInputValues">ResetInputValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOutputValues">ResetOutputValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatusReason">ResetStatusReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.putTimeouts"></a>

```csharp
private void PutTimeouts(RtsSoftwareDeploymentV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts">RtsSoftwareDeploymentV1Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputValues` <a name="ResetInputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetInputValues"></a>

```csharp
private void ResetInputValues()
```

##### `ResetOutputValues` <a name="ResetOutputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetOutputValues"></a>

```csharp
private void ResetOutputValues()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStatusReason` <a name="ResetStatusReason" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetStatusReason"></a>

```csharp
private void ResetStatusReason()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTenantId"></a>

```csharp
private void ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RtsSoftwareDeploymentV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RtsSoftwareDeploymentV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

RtsSoftwareDeploymentV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference">RtsSoftwareDeploymentV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValuesInput">InputValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValuesInput">OutputValuesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReasonInput">StatusReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValues">InputValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValues">OutputValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeouts"></a>

```csharp
public RtsSoftwareDeploymentV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference">RtsSoftwareDeploymentV1TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputValuesInput`<sup>Optional</sup> <a name="InputValuesInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OutputValuesInput`<sup>Optional</sup> <a name="OutputValuesInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValuesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputValuesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StatusReasonInput`<sup>Optional</sup> <a name="StatusReasonInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReasonInput"></a>

```csharp
public string StatusReasonInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputValues`<sup>Required</sup> <a name="InputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.inputValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OutputValues`<sup>Required</sup> <a name="OutputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.outputValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputValues { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtsSoftwareDeploymentV1Config <a name="RtsSoftwareDeploymentV1Config" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RtsSoftwareDeploymentV1Config {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ConfigId,
    string ServerId,
    string Action = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> InputValues = null,
    System.Collections.Generic.IDictionary<string, string> OutputValues = null,
    string Region = null,
    string Status = null,
    string StatusReason = null,
    string TenantId = null,
    RtsSoftwareDeploymentV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.configId">ConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#config_id RtsSoftwareDeploymentV1#config_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.serverId">ServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#server_id RtsSoftwareDeploymentV1#server_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#action RtsSoftwareDeploymentV1#action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#id RtsSoftwareDeploymentV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.inputValues">InputValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#input_values RtsSoftwareDeploymentV1#input_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.outputValues">OutputValues</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#output_values RtsSoftwareDeploymentV1#output_values}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#region RtsSoftwareDeploymentV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status RtsSoftwareDeploymentV1#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.statusReason">StatusReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status_reason RtsSoftwareDeploymentV1#status_reason}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.tenantId">TenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#tenant_id RtsSoftwareDeploymentV1#tenant_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts">RtsSoftwareDeploymentV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#config_id RtsSoftwareDeploymentV1#config_id}.

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#server_id RtsSoftwareDeploymentV1#server_id}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#action RtsSoftwareDeploymentV1#action}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#id RtsSoftwareDeploymentV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputValues`<sup>Optional</sup> <a name="InputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.inputValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> InputValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#input_values RtsSoftwareDeploymentV1#input_values}.

---

##### `OutputValues`<sup>Optional</sup> <a name="OutputValues" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.outputValues"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OutputValues { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#output_values RtsSoftwareDeploymentV1#output_values}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#region RtsSoftwareDeploymentV1#region}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status RtsSoftwareDeploymentV1#status}.

---

##### `StatusReason`<sup>Optional</sup> <a name="StatusReason" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.statusReason"></a>

```csharp
public string StatusReason { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#status_reason RtsSoftwareDeploymentV1#status_reason}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#tenant_id RtsSoftwareDeploymentV1#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Config.property.timeouts"></a>

```csharp
public RtsSoftwareDeploymentV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts">RtsSoftwareDeploymentV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#timeouts RtsSoftwareDeploymentV1#timeouts}

---

### RtsSoftwareDeploymentV1Timeouts <a name="RtsSoftwareDeploymentV1Timeouts" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RtsSoftwareDeploymentV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#create RtsSoftwareDeploymentV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#delete RtsSoftwareDeploymentV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#create RtsSoftwareDeploymentV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/rts_software_deployment_v1#delete RtsSoftwareDeploymentV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtsSoftwareDeploymentV1TimeoutsOutputReference <a name="RtsSoftwareDeploymentV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new RtsSoftwareDeploymentV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.rtsSoftwareDeploymentV1.RtsSoftwareDeploymentV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


