# `asmServiceMeshV1` Submodule <a name="`asmServiceMeshV1` Submodule" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AsmServiceMeshV1 <a name="AsmServiceMeshV1" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1 opentelekomcloud_asm_service_mesh_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1(Construct Scope, string Id, AsmServiceMeshV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config">AsmServiceMeshV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config">AsmServiceMeshV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters">PutClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig">PutProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing">PutTelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable">ResetIpv6Enable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig">ResetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing">ResetTelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutClusters` <a name="PutClusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters"></a>

```csharp
private void PutClusters(IResolvable|AsmServiceMeshV1Clusters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putClusters.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>[]

---

##### `PutProxyConfig` <a name="PutProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig"></a>

```csharp
private void PutProxyConfig(AsmServiceMeshV1ProxyConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---

##### `PutTelemetryConfigTracing` <a name="PutTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing"></a>

```csharp
private void PutTelemetryConfigTracing(AsmServiceMeshV1TelemetryConfigTracing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTelemetryConfigTracing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts"></a>

```csharp
private void PutTimeouts(AsmServiceMeshV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpv6Enable` <a name="ResetIpv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetIpv6Enable"></a>

```csharp
private void ResetIpv6Enable()
```

##### `ResetProxyConfig` <a name="ResetProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetProxyConfig"></a>

```csharp
private void ResetProxyConfig()
```

##### `ResetTelemetryConfigTracing` <a name="ResetTelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTelemetryConfigTracing"></a>

```csharp
private void ResetTelemetryConfigTracing()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsmServiceMeshV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsmServiceMeshV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsmServiceMeshV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

AsmServiceMeshV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AsmServiceMeshV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AsmServiceMeshV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AsmServiceMeshV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AsmServiceMeshV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds">ClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters">Clusters</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing">TelemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput">ClustersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput">Ipv6EnableInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput">ProxyConfigInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput">TelemetryConfigTracingInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable">Ipv6Enable</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClusterIds`<sup>Required</sup> <a name="ClusterIds" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusterIds"></a>

```csharp
public string[] ClusterIds { get; }
```

- *Type:* string[]

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clusters"></a>

```csharp
public AsmServiceMeshV1ClustersList Clusters { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList">AsmServiceMeshV1ClustersList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `ProxyConfig`<sup>Required</sup> <a name="ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfig"></a>

```csharp
public AsmServiceMeshV1ProxyConfigOutputReference ProxyConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference">AsmServiceMeshV1ProxyConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TelemetryConfigTracing`<sup>Required</sup> <a name="TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracing"></a>

```csharp
public AsmServiceMeshV1TelemetryConfigTracingOutputReference TelemetryConfigTracing { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference">AsmServiceMeshV1TelemetryConfigTracingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeouts"></a>

```csharp
public AsmServiceMeshV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference">AsmServiceMeshV1TimeoutsOutputReference</a>

---

##### `ClustersInput`<sup>Optional</sup> <a name="ClustersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.clustersInput"></a>

```csharp
public IResolvable|AsmServiceMeshV1Clusters[] ClustersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Ipv6EnableInput`<sup>Optional</sup> <a name="Ipv6EnableInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6EnableInput"></a>

```csharp
public bool|IResolvable Ipv6EnableInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProxyConfigInput`<sup>Optional</sup> <a name="ProxyConfigInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.proxyConfigInput"></a>

```csharp
public AsmServiceMeshV1ProxyConfig ProxyConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---

##### `TelemetryConfigTracingInput`<sup>Optional</sup> <a name="TelemetryConfigTracingInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.telemetryConfigTracingInput"></a>

```csharp
public AsmServiceMeshV1TelemetryConfigTracing TelemetryConfigTracingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.timeoutsInput"></a>

```csharp
public IResolvable|AsmServiceMeshV1Timeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ipv6Enable`<sup>Required</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.ipv6Enable"></a>

```csharp
public bool|IResolvable Ipv6Enable { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AsmServiceMeshV1Clusters <a name="AsmServiceMeshV1Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1Clusters {
    string ClusterId,
    string[] InstallationNodes,
    string[] InjectionNamespaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes">InstallationNodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces">InjectionNamespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}. |

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#cluster_id AsmServiceMeshV1#cluster_id}.

---

##### `InstallationNodes`<sup>Required</sup> <a name="InstallationNodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.installationNodes"></a>

```csharp
public string[] InstallationNodes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#installation_nodes AsmServiceMeshV1#installation_nodes}.

---

##### `InjectionNamespaces`<sup>Optional</sup> <a name="InjectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters.property.injectionNamespaces"></a>

```csharp
public string[] InjectionNamespaces { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#injection_namespaces AsmServiceMeshV1#injection_namespaces}.

---

### AsmServiceMeshV1Config <a name="AsmServiceMeshV1Config" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|AsmServiceMeshV1Clusters[] Clusters,
    string Name,
    string Type,
    string Version,
    string Id = null,
    bool|IResolvable Ipv6Enable = null,
    AsmServiceMeshV1ProxyConfig ProxyConfig = null,
    AsmServiceMeshV1TelemetryConfigTracing TelemetryConfigTracing = null,
    AsmServiceMeshV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters">Clusters</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>[]</code> | clusters block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable">Ipv6Enable</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig">ProxyConfig</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing">TelemetryConfigTracing</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | telemetry_config_tracing block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Clusters`<sup>Required</sup> <a name="Clusters" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.clusters"></a>

```csharp
public IResolvable|AsmServiceMeshV1Clusters[] Clusters { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>[]

clusters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#clusters AsmServiceMeshV1#clusters}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#type AsmServiceMeshV1#type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#version AsmServiceMeshV1#version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#id AsmServiceMeshV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ipv6Enable`<sup>Optional</sup> <a name="Ipv6Enable" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.ipv6Enable"></a>

```csharp
public bool|IResolvable Ipv6Enable { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#ipv6_enable AsmServiceMeshV1#ipv6_enable}.

---

##### `ProxyConfig`<sup>Optional</sup> <a name="ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.proxyConfig"></a>

```csharp
public AsmServiceMeshV1ProxyConfig ProxyConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#proxy_config AsmServiceMeshV1#proxy_config}

---

##### `TelemetryConfigTracing`<sup>Optional</sup> <a name="TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.telemetryConfigTracing"></a>

```csharp
public AsmServiceMeshV1TelemetryConfigTracing TelemetryConfigTracing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

telemetry_config_tracing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#telemetry_config_tracing AsmServiceMeshV1#telemetry_config_tracing}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Config.property.timeouts"></a>

```csharp
public AsmServiceMeshV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#timeouts AsmServiceMeshV1#timeouts}

---

### AsmServiceMeshV1ProxyConfig <a name="AsmServiceMeshV1ProxyConfig" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1ProxyConfig {
    string ExcludeInboundPorts = null,
    string ExcludeIpRanges = null,
    string ExcludeOutboundPorts = null,
    string IncludeInboundPorts = null,
    string IncludeIpRanges = null,
    string IncludeOutboundPorts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts">ExcludeInboundPorts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges">ExcludeIpRanges</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts">ExcludeOutboundPorts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts">IncludeInboundPorts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges">IncludeIpRanges</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts">IncludeOutboundPorts</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}. |

---

##### `ExcludeInboundPorts`<sup>Optional</sup> <a name="ExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeInboundPorts"></a>

```csharp
public string ExcludeInboundPorts { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_inbound_ports AsmServiceMeshV1#exclude_inbound_ports}.

---

##### `ExcludeIpRanges`<sup>Optional</sup> <a name="ExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeIpRanges"></a>

```csharp
public string ExcludeIpRanges { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_ip_ranges AsmServiceMeshV1#exclude_ip_ranges}.

---

##### `ExcludeOutboundPorts`<sup>Optional</sup> <a name="ExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.excludeOutboundPorts"></a>

```csharp
public string ExcludeOutboundPorts { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#exclude_outbound_ports AsmServiceMeshV1#exclude_outbound_ports}.

---

##### `IncludeInboundPorts`<sup>Optional</sup> <a name="IncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeInboundPorts"></a>

```csharp
public string IncludeInboundPorts { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_inbound_ports AsmServiceMeshV1#include_inbound_ports}.

---

##### `IncludeIpRanges`<sup>Optional</sup> <a name="IncludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeIpRanges"></a>

```csharp
public string IncludeIpRanges { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_ip_ranges AsmServiceMeshV1#include_ip_ranges}.

---

##### `IncludeOutboundPorts`<sup>Optional</sup> <a name="IncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig.property.includeOutboundPorts"></a>

```csharp
public string IncludeOutboundPorts { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#include_outbound_ports AsmServiceMeshV1#include_outbound_ports}.

---

### AsmServiceMeshV1TelemetryConfigTracing <a name="AsmServiceMeshV1TelemetryConfigTracing" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1TelemetryConfigTracing {
    string[] DefaultProviders = null,
    IResolvable|AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] ExtensionProviders = null,
    double RandomSamplingPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders">DefaultProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders">ExtensionProviders</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>[]</code> | extension_providers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage">RandomSamplingPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}. |

---

##### `DefaultProviders`<sup>Optional</sup> <a name="DefaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.defaultProviders"></a>

```csharp
public string[] DefaultProviders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#default_providers AsmServiceMeshV1#default_providers}.

---

##### `ExtensionProviders`<sup>Optional</sup> <a name="ExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.extensionProviders"></a>

```csharp
public IResolvable|AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] ExtensionProviders { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>[]

extension_providers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#extension_providers AsmServiceMeshV1#extension_providers}

---

##### `RandomSamplingPercentage`<sup>Optional</sup> <a name="RandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing.property.randomSamplingPercentage"></a>

```csharp
public double RandomSamplingPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#random_sampling_percentage AsmServiceMeshV1#random_sampling_percentage}.

---

### AsmServiceMeshV1TelemetryConfigTracingExtensionProviders <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1TelemetryConfigTracingExtensionProviders {
    string Name = null,
    string ZipkinServiceAddr = null,
    double ZipkinServicePort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr">ZipkinServiceAddr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort">ZipkinServicePort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#name AsmServiceMeshV1#name}.

---

##### `ZipkinServiceAddr`<sup>Optional</sup> <a name="ZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServiceAddr"></a>

```csharp
public string ZipkinServiceAddr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_addr AsmServiceMeshV1#zipkin_service_addr}.

---

##### `ZipkinServicePort`<sup>Optional</sup> <a name="ZipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders.property.zipkinServicePort"></a>

```csharp
public double ZipkinServicePort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#zipkin_service_port AsmServiceMeshV1#zipkin_service_port}.

---

### AsmServiceMeshV1Timeouts <a name="AsmServiceMeshV1Timeouts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#create AsmServiceMeshV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/asm_service_mesh_v1#delete AsmServiceMeshV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### AsmServiceMeshV1ClustersList <a name="AsmServiceMeshV1ClustersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1ClustersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get"></a>

```csharp
private AsmServiceMeshV1ClustersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersList.property.internalValue"></a>

```csharp
public IResolvable|AsmServiceMeshV1Clusters[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>[]

---


### AsmServiceMeshV1ClustersOutputReference <a name="AsmServiceMeshV1ClustersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1ClustersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces">ResetInjectionNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInjectionNamespaces` <a name="ResetInjectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.resetInjectionNamespaces"></a>

```csharp
private void ResetInjectionNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput">InjectionNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput">InstallationNodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces">InjectionNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes">InstallationNodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `InjectionNamespacesInput`<sup>Optional</sup> <a name="InjectionNamespacesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespacesInput"></a>

```csharp
public string[] InjectionNamespacesInput { get; }
```

- *Type:* string[]

---

##### `InstallationNodesInput`<sup>Optional</sup> <a name="InstallationNodesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodesInput"></a>

```csharp
public string[] InstallationNodesInput { get; }
```

- *Type:* string[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `InjectionNamespaces`<sup>Required</sup> <a name="InjectionNamespaces" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.injectionNamespaces"></a>

```csharp
public string[] InjectionNamespaces { get; }
```

- *Type:* string[]

---

##### `InstallationNodes`<sup>Required</sup> <a name="InstallationNodes" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.installationNodes"></a>

```csharp
public string[] InstallationNodes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ClustersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AsmServiceMeshV1Clusters InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Clusters">AsmServiceMeshV1Clusters</a>

---


### AsmServiceMeshV1ProxyConfigOutputReference <a name="AsmServiceMeshV1ProxyConfigOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1ProxyConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts">ResetExcludeInboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges">ResetExcludeIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts">ResetExcludeOutboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts">ResetIncludeInboundPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges">ResetIncludeIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts">ResetIncludeOutboundPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeInboundPorts` <a name="ResetExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeInboundPorts"></a>

```csharp
private void ResetExcludeInboundPorts()
```

##### `ResetExcludeIpRanges` <a name="ResetExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeIpRanges"></a>

```csharp
private void ResetExcludeIpRanges()
```

##### `ResetExcludeOutboundPorts` <a name="ResetExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetExcludeOutboundPorts"></a>

```csharp
private void ResetExcludeOutboundPorts()
```

##### `ResetIncludeInboundPorts` <a name="ResetIncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeInboundPorts"></a>

```csharp
private void ResetIncludeInboundPorts()
```

##### `ResetIncludeIpRanges` <a name="ResetIncludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeIpRanges"></a>

```csharp
private void ResetIncludeIpRanges()
```

##### `ResetIncludeOutboundPorts` <a name="ResetIncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.resetIncludeOutboundPorts"></a>

```csharp
private void ResetIncludeOutboundPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput">ExcludeInboundPortsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput">ExcludeIpRangesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput">ExcludeOutboundPortsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput">IncludeInboundPortsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput">IncludeIpRangesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput">IncludeOutboundPortsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts">ExcludeInboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges">ExcludeIpRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts">ExcludeOutboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts">IncludeInboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges">IncludeIpRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts">IncludeOutboundPorts</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInboundPortsInput`<sup>Optional</sup> <a name="ExcludeInboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPortsInput"></a>

```csharp
public string ExcludeInboundPortsInput { get; }
```

- *Type:* string

---

##### `ExcludeIpRangesInput`<sup>Optional</sup> <a name="ExcludeIpRangesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRangesInput"></a>

```csharp
public string ExcludeIpRangesInput { get; }
```

- *Type:* string

---

##### `ExcludeOutboundPortsInput`<sup>Optional</sup> <a name="ExcludeOutboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPortsInput"></a>

```csharp
public string ExcludeOutboundPortsInput { get; }
```

- *Type:* string

---

##### `IncludeInboundPortsInput`<sup>Optional</sup> <a name="IncludeInboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPortsInput"></a>

```csharp
public string IncludeInboundPortsInput { get; }
```

- *Type:* string

---

##### `IncludeIpRangesInput`<sup>Optional</sup> <a name="IncludeIpRangesInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRangesInput"></a>

```csharp
public string IncludeIpRangesInput { get; }
```

- *Type:* string

---

##### `IncludeOutboundPortsInput`<sup>Optional</sup> <a name="IncludeOutboundPortsInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPortsInput"></a>

```csharp
public string IncludeOutboundPortsInput { get; }
```

- *Type:* string

---

##### `ExcludeInboundPorts`<sup>Required</sup> <a name="ExcludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeInboundPorts"></a>

```csharp
public string ExcludeInboundPorts { get; }
```

- *Type:* string

---

##### `ExcludeIpRanges`<sup>Required</sup> <a name="ExcludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeIpRanges"></a>

```csharp
public string ExcludeIpRanges { get; }
```

- *Type:* string

---

##### `ExcludeOutboundPorts`<sup>Required</sup> <a name="ExcludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.excludeOutboundPorts"></a>

```csharp
public string ExcludeOutboundPorts { get; }
```

- *Type:* string

---

##### `IncludeInboundPorts`<sup>Required</sup> <a name="IncludeInboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeInboundPorts"></a>

```csharp
public string IncludeInboundPorts { get; }
```

- *Type:* string

---

##### `IncludeIpRanges`<sup>Required</sup> <a name="IncludeIpRanges" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeIpRanges"></a>

```csharp
public string IncludeIpRanges { get; }
```

- *Type:* string

---

##### `IncludeOutboundPorts`<sup>Required</sup> <a name="IncludeOutboundPorts" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.includeOutboundPorts"></a>

```csharp
public string IncludeOutboundPorts { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfigOutputReference.property.internalValue"></a>

```csharp
public AsmServiceMeshV1ProxyConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1ProxyConfig">AsmServiceMeshV1ProxyConfig</a>

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get"></a>

```csharp
private AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList.property.internalValue"></a>

```csharp
public IResolvable|AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>[]

---


### AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr">ResetZipkinServiceAddr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort">ResetZipkinServicePort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetZipkinServiceAddr` <a name="ResetZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServiceAddr"></a>

```csharp
private void ResetZipkinServiceAddr()
```

##### `ResetZipkinServicePort` <a name="ResetZipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.resetZipkinServicePort"></a>

```csharp
private void ResetZipkinServicePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput">ZipkinServiceAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput">ZipkinServicePortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr">ZipkinServiceAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort">ZipkinServicePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ZipkinServiceAddrInput`<sup>Optional</sup> <a name="ZipkinServiceAddrInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddrInput"></a>

```csharp
public string ZipkinServiceAddrInput { get; }
```

- *Type:* string

---

##### `ZipkinServicePortInput`<sup>Optional</sup> <a name="ZipkinServicePortInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePortInput"></a>

```csharp
public double ZipkinServicePortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ZipkinServiceAddr`<sup>Required</sup> <a name="ZipkinServiceAddr" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServiceAddr"></a>

```csharp
public string ZipkinServiceAddr { get; }
```

- *Type:* string

---

##### `ZipkinServicePort`<sup>Required</sup> <a name="ZipkinServicePort" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.zipkinServicePort"></a>

```csharp
public double ZipkinServicePort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AsmServiceMeshV1TelemetryConfigTracingExtensionProviders InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>

---


### AsmServiceMeshV1TelemetryConfigTracingOutputReference <a name="AsmServiceMeshV1TelemetryConfigTracingOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1TelemetryConfigTracingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders">PutExtensionProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders">ResetDefaultProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders">ResetExtensionProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage">ResetRandomSamplingPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtensionProviders` <a name="PutExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders"></a>

```csharp
private void PutExtensionProviders(IResolvable|AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.putExtensionProviders.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>[]

---

##### `ResetDefaultProviders` <a name="ResetDefaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetDefaultProviders"></a>

```csharp
private void ResetDefaultProviders()
```

##### `ResetExtensionProviders` <a name="ResetExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetExtensionProviders"></a>

```csharp
private void ResetExtensionProviders()
```

##### `ResetRandomSamplingPercentage` <a name="ResetRandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.resetRandomSamplingPercentage"></a>

```csharp
private void ResetRandomSamplingPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders">ExtensionProviders</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput">DefaultProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput">ExtensionProvidersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput">RandomSamplingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders">DefaultProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage">RandomSamplingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtensionProviders`<sup>Required</sup> <a name="ExtensionProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProviders"></a>

```csharp
public AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList ExtensionProviders { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList">AsmServiceMeshV1TelemetryConfigTracingExtensionProvidersList</a>

---

##### `DefaultProvidersInput`<sup>Optional</sup> <a name="DefaultProvidersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProvidersInput"></a>

```csharp
public string[] DefaultProvidersInput { get; }
```

- *Type:* string[]

---

##### `ExtensionProvidersInput`<sup>Optional</sup> <a name="ExtensionProvidersInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.extensionProvidersInput"></a>

```csharp
public IResolvable|AsmServiceMeshV1TelemetryConfigTracingExtensionProviders[] ExtensionProvidersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingExtensionProviders">AsmServiceMeshV1TelemetryConfigTracingExtensionProviders</a>[]

---

##### `RandomSamplingPercentageInput`<sup>Optional</sup> <a name="RandomSamplingPercentageInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentageInput"></a>

```csharp
public double RandomSamplingPercentageInput { get; }
```

- *Type:* double

---

##### `DefaultProviders`<sup>Required</sup> <a name="DefaultProviders" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.defaultProviders"></a>

```csharp
public string[] DefaultProviders { get; }
```

- *Type:* string[]

---

##### `RandomSamplingPercentage`<sup>Required</sup> <a name="RandomSamplingPercentage" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.randomSamplingPercentage"></a>

```csharp
public double RandomSamplingPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracingOutputReference.property.internalValue"></a>

```csharp
public AsmServiceMeshV1TelemetryConfigTracing InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TelemetryConfigTracing">AsmServiceMeshV1TelemetryConfigTracing</a>

---


### AsmServiceMeshV1TimeoutsOutputReference <a name="AsmServiceMeshV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new AsmServiceMeshV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AsmServiceMeshV1Timeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.asmServiceMeshV1.AsmServiceMeshV1Timeouts">AsmServiceMeshV1Timeouts</a>

---



