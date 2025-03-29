# `wafDomainV1` Submodule <a name="`wafDomainV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDomainV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDomainV1 <a name="WafDomainV1" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1 opentelekomcloud_waf_domain_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1(Construct Scope, string Id, WafDomainV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config">WafDomainV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config">WafDomainV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage">PutBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer">PutServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage">ResetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher">ResetCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList">ResetSipHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName">ResetSipHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockPage` <a name="PutBlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage"></a>

```csharp
private void PutBlockPage(WafDomainV1BlockPage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---

##### `PutServer` <a name="PutServer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer"></a>

```csharp
private void PutServer(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putServer.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts"></a>

```csharp
private void PutTimeouts(WafDomainV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

---

##### `ResetBlockPage` <a name="ResetBlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetBlockPage"></a>

```csharp
private void ResetBlockPage()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetCipher` <a name="ResetCipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetCipher"></a>

```csharp
private void ResetCipher()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetSipHeaderList` <a name="ResetSipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderList"></a>

```csharp
private void ResetSipHeaderList()
```

##### `ResetSipHeaderName` <a name="ResetSipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetSipHeaderName"></a>

```csharp
private void ResetSipHeaderName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.resetTls"></a>

```csharp
private void ResetTls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDomainV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDomainV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDomainV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafDomainV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDomainV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDomainV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WafDomainV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode">AccessCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus">AccessStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname">Cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus">ProtectStatus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server">Server</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain">SubDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode">TxtCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput">BlockPageInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput">CipherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput">ProxyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput">ServerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput">SipHeaderListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput">SipHeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput">TlsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher">Cipher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy">Proxy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList">SipHeaderList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName">SipHeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls">Tls</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccessCode`<sup>Required</sup> <a name="AccessCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessCode"></a>

```csharp
public string AccessCode { get; }
```

- *Type:* string

---

##### `AccessStatus`<sup>Required</sup> <a name="AccessStatus" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.accessStatus"></a>

```csharp
public double AccessStatus { get; }
```

- *Type:* double

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPage"></a>

```csharp
public WafDomainV1BlockPageOutputReference BlockPage { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference">WafDomainV1BlockPageOutputReference</a>

---

##### `Cname`<sup>Required</sup> <a name="Cname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cname"></a>

```csharp
public string Cname { get; }
```

- *Type:* string

---

##### `ProtectStatus`<sup>Required</sup> <a name="ProtectStatus" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protectStatus"></a>

```csharp
public double ProtectStatus { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.server"></a>

```csharp
public WafDomainV1ServerList Server { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList">WafDomainV1ServerList</a>

---

##### `SubDomain`<sup>Required</sup> <a name="SubDomain" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.subDomain"></a>

```csharp
public string SubDomain { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeouts"></a>

```csharp
public WafDomainV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference">WafDomainV1TimeoutsOutputReference</a>

---

##### `TxtCode`<sup>Required</sup> <a name="TxtCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.txtCode"></a>

```csharp
public string TxtCode { get; }
```

- *Type:* string

---

##### `BlockPageInput`<sup>Optional</sup> <a name="BlockPageInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.blockPageInput"></a>

```csharp
public WafDomainV1BlockPage BlockPageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `CipherInput`<sup>Optional</sup> <a name="CipherInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipherInput"></a>

```csharp
public string CipherInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxyInput"></a>

```csharp
public object ProxyInput { get; }
```

- *Type:* object

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.serverInput"></a>

```csharp
public object ServerInput { get; }
```

- *Type:* object

---

##### `SipHeaderListInput`<sup>Optional</sup> <a name="SipHeaderListInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderListInput"></a>

```csharp
public string[] SipHeaderListInput { get; }
```

- *Type:* string[]

---

##### `SipHeaderNameInput`<sup>Optional</sup> <a name="SipHeaderNameInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderNameInput"></a>

```csharp
public string SipHeaderNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tlsInput"></a>

```csharp
public string TlsInput { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `Cipher`<sup>Required</sup> <a name="Cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.cipher"></a>

```csharp
public string Cipher { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.proxy"></a>

```csharp
public object Proxy { get; }
```

- *Type:* object

---

##### `SipHeaderList`<sup>Required</sup> <a name="SipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderList"></a>

```csharp
public string[] SipHeaderList { get; }
```

- *Type:* string[]

---

##### `SipHeaderName`<sup>Required</sup> <a name="SipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.sipHeaderName"></a>

```csharp
public string SipHeaderName { get; }
```

- *Type:* string

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tls"></a>

```csharp
public string Tls { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDomainV1BlockPage <a name="WafDomainV1BlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1BlockPage {
    string Template,
    string Content = null,
    string ContentType = null,
    string RedirectUrl = null,
    string StatusCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template">Template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#template WafDomainV1#template}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content">Content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#content WafDomainV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType">ContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode">StatusCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}. |

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#template WafDomainV1#template}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#content WafDomainV1#content}.

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}.

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}.

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage.property.statusCode"></a>

```csharp
public string StatusCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}.

---

### WafDomainV1Config <a name="WafDomainV1Config" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Hostname,
    object Proxy,
    object Server,
    WafDomainV1BlockPage BlockPage = null,
    string CertificateId = null,
    string Cipher = null,
    string Id = null,
    string PolicyId = null,
    string[] SipHeaderList = null,
    string SipHeaderName = null,
    WafDomainV1Timeouts Timeouts = null,
    string Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy">Proxy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server">Server</a></code> | <code>object</code> | server block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId">CertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher">Cipher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#id WafDomainV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList">SipHeaderList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName">SipHeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls">Tls</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#tls WafDomainV1#tls}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}.

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.proxy"></a>

```csharp
public object Proxy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.server"></a>

```csharp
public object Server { get; set; }
```

- *Type:* object

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#server WafDomainV1#server}

---

##### `BlockPage`<sup>Optional</sup> <a name="BlockPage" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.blockPage"></a>

```csharp
public WafDomainV1BlockPage BlockPage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#block_page WafDomainV1#block_page}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}.

---

##### `Cipher`<sup>Optional</sup> <a name="Cipher" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.cipher"></a>

```csharp
public string Cipher { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#id WafDomainV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}.

---

##### `SipHeaderList`<sup>Optional</sup> <a name="SipHeaderList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderList"></a>

```csharp
public string[] SipHeaderList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}.

---

##### `SipHeaderName`<sup>Optional</sup> <a name="SipHeaderName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.sipHeaderName"></a>

```csharp
public string SipHeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.timeouts"></a>

```csharp
public WafDomainV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts">WafDomainV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#timeouts WafDomainV1#timeouts}

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Config.property.tls"></a>

```csharp
public string Tls { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#tls WafDomainV1#tls}.

---

### WafDomainV1Server <a name="WafDomainV1Server" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1Server {
    string Address,
    string Port,
    string BackProtocol = null,
    string ClientProtocol = null,
    string FrontProtocol = null,
    string ServerProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address">Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#address WafDomainV1#address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port">Port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#port WafDomainV1#port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol">BackProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol">ClientProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol">FrontProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol">ServerProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#address WafDomainV1#address}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#port WafDomainV1#port}.

---

##### `BackProtocol`<sup>Optional</sup> <a name="BackProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.backProtocol"></a>

```csharp
public string BackProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}.

---

##### `ClientProtocol`<sup>Optional</sup> <a name="ClientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.clientProtocol"></a>

```csharp
public string ClientProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}.

---

##### `FrontProtocol`<sup>Optional</sup> <a name="FrontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.frontProtocol"></a>

```csharp
public string FrontProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}.

---

##### `ServerProtocol`<sup>Optional</sup> <a name="ServerProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Server.property.serverProtocol"></a>

```csharp
public string ServerProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}.

---

### WafDomainV1Timeouts <a name="WafDomainV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#create WafDomainV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#delete WafDomainV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#create WafDomainV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.34/docs/resources/waf_domain_v1#delete WafDomainV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDomainV1BlockPageOutputReference <a name="WafDomainV1BlockPageOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1BlockPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetRedirectUrl"></a>

```csharp
private void ResetRedirectUrl()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCodeInput"></a>

```csharp
public string StatusCodeInput { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPageOutputReference.property.internalValue"></a>

```csharp
public WafDomainV1BlockPage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1BlockPage">WafDomainV1BlockPage</a>

---


### WafDomainV1ServerList <a name="WafDomainV1ServerList" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1ServerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get"></a>

```csharp
private WafDomainV1ServerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDomainV1ServerOutputReference <a name="WafDomainV1ServerOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1ServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol">ResetBackProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol">ResetClientProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol">ResetFrontProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol">ResetServerProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackProtocol` <a name="ResetBackProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetBackProtocol"></a>

```csharp
private void ResetBackProtocol()
```

##### `ResetClientProtocol` <a name="ResetClientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetClientProtocol"></a>

```csharp
private void ResetClientProtocol()
```

##### `ResetFrontProtocol` <a name="ResetFrontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetFrontProtocol"></a>

```csharp
private void ResetFrontProtocol()
```

##### `ResetServerProtocol` <a name="ResetServerProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.resetServerProtocol"></a>

```csharp
private void ResetServerProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput">BackProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput">ClientProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput">FrontProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput">ServerProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol">BackProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol">ClientProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol">FrontProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol">ServerProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `BackProtocolInput`<sup>Optional</sup> <a name="BackProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocolInput"></a>

```csharp
public string BackProtocolInput { get; }
```

- *Type:* string

---

##### `ClientProtocolInput`<sup>Optional</sup> <a name="ClientProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocolInput"></a>

```csharp
public string ClientProtocolInput { get; }
```

- *Type:* string

---

##### `FrontProtocolInput`<sup>Optional</sup> <a name="FrontProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocolInput"></a>

```csharp
public string FrontProtocolInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `ServerProtocolInput`<sup>Optional</sup> <a name="ServerProtocolInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocolInput"></a>

```csharp
public string ServerProtocolInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `BackProtocol`<sup>Required</sup> <a name="BackProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.backProtocol"></a>

```csharp
public string BackProtocol { get; }
```

- *Type:* string

---

##### `ClientProtocol`<sup>Required</sup> <a name="ClientProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.clientProtocol"></a>

```csharp
public string ClientProtocol { get; }
```

- *Type:* string

---

##### `FrontProtocol`<sup>Required</sup> <a name="FrontProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.frontProtocol"></a>

```csharp
public string FrontProtocol { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `ServerProtocol`<sup>Required</sup> <a name="ServerProtocol" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.serverProtocol"></a>

```csharp
public string ServerProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1ServerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WafDomainV1TimeoutsOutputReference <a name="WafDomainV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafDomainV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafDomainV1.WafDomainV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



