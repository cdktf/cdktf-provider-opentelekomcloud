# `s3Bucket` Submodule <a name="`s3Bucket` Submodule" id="@cdktf/provider-opentelekomcloud.s3Bucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3Bucket <a name="S3Bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket opentelekomcloud_s3_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3Bucket(Construct Scope, string Id, S3BucketConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig">S3BucketConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig">S3BucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule">PutLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning">PutVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite">PutWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetHostedZoneId">ResetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLifecycleRule">ResetLifecycleRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetVersioning">ResetVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsite">ResetWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteDomain">ResetWebsiteDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteEndpoint">ResetWebsiteEndpoint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule"></a>

```csharp
private void PutCorsRule(IResolvable|S3BucketCorsRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putCorsRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

---

##### `PutLifecycleRule` <a name="PutLifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule"></a>

```csharp
private void PutLifecycleRule(IResolvable|S3BucketLifecycleRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLifecycleRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging"></a>

```csharp
private void PutLogging(IResolvable|S3BucketLogging[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putLogging.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>[]

---

##### `PutVersioning` <a name="PutVersioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning"></a>

```csharp
private void PutVersioning(S3BucketVersioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putVersioning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `PutWebsite` <a name="PutWebsite" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite"></a>

```csharp
private void PutWebsite(S3BucketWebsite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.putWebsite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetArn` <a name="ResetArn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetCorsRule"></a>

```csharp
private void ResetCorsRule()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetHostedZoneId` <a name="ResetHostedZoneId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetHostedZoneId"></a>

```csharp
private void ResetHostedZoneId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLifecycleRule` <a name="ResetLifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLifecycleRule"></a>

```csharp
private void ResetLifecycleRule()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetPolicy"></a>

```csharp
private void ResetPolicy()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVersioning` <a name="ResetVersioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetVersioning"></a>

```csharp
private void ResetVersioning()
```

##### `ResetWebsite` <a name="ResetWebsite" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsite"></a>

```csharp
private void ResetWebsite()
```

##### `ResetWebsiteDomain` <a name="ResetWebsiteDomain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteDomain"></a>

```csharp
private void ResetWebsiteDomain()
```

##### `ResetWebsiteEndpoint` <a name="ResetWebsiteEndpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.resetWebsiteEndpoint"></a>

```csharp
private void ResetWebsiteEndpoint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

S3Bucket.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

S3Bucket.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

S3Bucket.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

S3Bucket.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3Bucket to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3Bucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the S3Bucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketDomainName">BucketDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRule">LifecycleRule</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList">S3BucketLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.website">Website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRuleInput">CorsRuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRuleInput">LifecycleRuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.loggingInput">LoggingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioningInput">VersioningInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomainInput">WebsiteDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpointInput">WebsiteEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteInput">WebsiteInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomain">WebsiteDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpoint">WebsiteEndpoint</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BucketDomainName`<sup>Required</sup> <a name="BucketDomainName" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketDomainName"></a>

```csharp
public string BucketDomainName { get; }
```

- *Type:* string

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRule"></a>

```csharp
public S3BucketCorsRuleList CorsRule { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList">S3BucketCorsRuleList</a>

---

##### `LifecycleRule`<sup>Required</sup> <a name="LifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRule"></a>

```csharp
public S3BucketLifecycleRuleList LifecycleRule { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList">S3BucketLifecycleRuleList</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.logging"></a>

```csharp
public S3BucketLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList">S3BucketLoggingList</a>

---

##### `Versioning`<sup>Required</sup> <a name="Versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioning"></a>

```csharp
public S3BucketVersioningOutputReference Versioning { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference">S3BucketVersioningOutputReference</a>

---

##### `Website`<sup>Required</sup> <a name="Website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.website"></a>

```csharp
public S3BucketWebsiteOutputReference Website { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference">S3BucketWebsiteOutputReference</a>

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.corsRuleInput"></a>

```csharp
public IResolvable|S3BucketCorsRule[] CorsRuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroyInput"></a>

```csharp
public bool|IResolvable ForceDestroyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneIdInput"></a>

```csharp
public string HostedZoneIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LifecycleRuleInput`<sup>Optional</sup> <a name="LifecycleRuleInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.lifecycleRuleInput"></a>

```csharp
public IResolvable|S3BucketLifecycleRule[] LifecycleRuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.loggingInput"></a>

```csharp
public IResolvable|S3BucketLogging[] LoggingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>[]

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersioningInput`<sup>Optional</sup> <a name="VersioningInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.versioningInput"></a>

```csharp
public S3BucketVersioning VersioningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---

##### `WebsiteDomainInput`<sup>Optional</sup> <a name="WebsiteDomainInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomainInput"></a>

```csharp
public string WebsiteDomainInput { get; }
```

- *Type:* string

---

##### `WebsiteEndpointInput`<sup>Optional</sup> <a name="WebsiteEndpointInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpointInput"></a>

```csharp
public string WebsiteEndpointInput { get; }
```

- *Type:* string

---

##### `WebsiteInput`<sup>Optional</sup> <a name="WebsiteInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteInput"></a>

```csharp
public S3BucketWebsite WebsiteInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebsiteDomain`<sup>Required</sup> <a name="WebsiteDomain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteDomain"></a>

```csharp
public string WebsiteDomain { get; }
```

- *Type:* string

---

##### `WebsiteEndpoint`<sup>Required</sup> <a name="WebsiteEndpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.websiteEndpoint"></a>

```csharp
public string WebsiteEndpoint { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3Bucket.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketConfig <a name="S3BucketConfig" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Acl = null,
    string Arn = null,
    string Bucket = null,
    string BucketPrefix = null,
    IResolvable|S3BucketCorsRule[] CorsRule = null,
    bool|IResolvable ForceDestroy = null,
    string HostedZoneId = null,
    string Id = null,
    IResolvable|S3BucketLifecycleRule[] LifecycleRule = null,
    IResolvable|S3BucketLogging[] Logging = null,
    string Policy = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    S3BucketVersioning Versioning = null,
    S3BucketWebsite Website = null,
    string WebsiteDomain = null,
    string WebsiteEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#acl S3Bucket#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#arn S3Bucket#arn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#bucket S3Bucket#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.corsRule">CorsRule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forceDestroy">ForceDestroy</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.hostedZoneId">HostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycleRule">LifecycleRule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]</code> | lifecycle_rule block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.logging">Logging</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>[]</code> | logging block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#policy S3Bucket#policy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#region S3Bucket#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#tags S3Bucket#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.versioning">Versioning</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | versioning block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.website">Website</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | website block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteDomain">WebsiteDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteEndpoint">WebsiteEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#acl S3Bucket#acl}.

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#arn S3Bucket#arn}.

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#bucket S3Bucket#bucket}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#bucket_prefix S3Bucket#bucket_prefix}.

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.corsRule"></a>

```csharp
public IResolvable|S3BucketCorsRule[] CorsRule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#cors_rule S3Bucket#cors_rule}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.forceDestroy"></a>

```csharp
public bool|IResolvable ForceDestroy { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#force_destroy S3Bucket#force_destroy}.

---

##### `HostedZoneId`<sup>Optional</sup> <a name="HostedZoneId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.hostedZoneId"></a>

```csharp
public string HostedZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#hosted_zone_id S3Bucket#hosted_zone_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LifecycleRule`<sup>Optional</sup> <a name="LifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.lifecycleRule"></a>

```csharp
public IResolvable|S3BucketLifecycleRule[] LifecycleRule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

lifecycle_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#lifecycle_rule S3Bucket#lifecycle_rule}

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.logging"></a>

```csharp
public IResolvable|S3BucketLogging[] Logging { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>[]

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#logging S3Bucket#logging}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#policy S3Bucket#policy}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#region S3Bucket#region}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#tags S3Bucket#tags}.

---

##### `Versioning`<sup>Optional</sup> <a name="Versioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.versioning"></a>

```csharp
public S3BucketVersioning Versioning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

versioning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#versioning S3Bucket#versioning}

---

##### `Website`<sup>Optional</sup> <a name="Website" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.website"></a>

```csharp
public S3BucketWebsite Website { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

website block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#website S3Bucket#website}

---

##### `WebsiteDomain`<sup>Optional</sup> <a name="WebsiteDomain" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteDomain"></a>

```csharp
public string WebsiteDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#website_domain S3Bucket#website_domain}.

---

##### `WebsiteEndpoint`<sup>Optional</sup> <a name="WebsiteEndpoint" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketConfig.property.websiteEndpoint"></a>

```csharp
public string WebsiteEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#website_endpoint S3Bucket#website_endpoint}.

---

### S3BucketCorsRule <a name="S3BucketCorsRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketCorsRule {
    string[] AllowedMethods,
    string[] AllowedOrigins,
    string[] AllowedHeaders = null,
    string[] ExposeHeaders = null,
    double MaxAgeSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}. |

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#allowed_methods S3Bucket#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#allowed_origins S3Bucket#allowed_origins}.

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#allowed_headers S3Bucket#allowed_headers}.

---

##### `ExposeHeaders`<sup>Optional</sup> <a name="ExposeHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#expose_headers S3Bucket#expose_headers}.

---

##### `MaxAgeSeconds`<sup>Optional</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#max_age_seconds S3Bucket#max_age_seconds}.

---

### S3BucketLifecycleRule <a name="S3BucketLifecycleRule" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRule {
    bool|IResolvable Enabled,
    double AbortIncompleteMultipartUploadDays = null,
    IResolvable|S3BucketLifecycleRuleExpiration[] Expiration = null,
    string Id = null,
    IResolvable|S3BucketLifecycleRuleNoncurrentVersionExpiration[] NoncurrentVersionExpiration = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays">AbortIncompleteMultipartUploadDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.expiration">Expiration</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>[]</code> | expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#id S3Bucket#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration">NoncurrentVersionExpiration</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>[]</code> | noncurrent_version_expiration block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#prefix S3Bucket#prefix}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#enabled S3Bucket#enabled}.

---

##### `AbortIncompleteMultipartUploadDays`<sup>Optional</sup> <a name="AbortIncompleteMultipartUploadDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.abortIncompleteMultipartUploadDays"></a>

```csharp
public double AbortIncompleteMultipartUploadDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#abort_incomplete_multipart_upload_days S3Bucket#abort_incomplete_multipart_upload_days}.

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.expiration"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleExpiration[] Expiration { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>[]

expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#expiration S3Bucket#expiration}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#id S3Bucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NoncurrentVersionExpiration`<sup>Optional</sup> <a name="NoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.noncurrentVersionExpiration"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleNoncurrentVersionExpiration[] NoncurrentVersionExpiration { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>[]

noncurrent_version_expiration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#noncurrent_version_expiration S3Bucket#noncurrent_version_expiration}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#prefix S3Bucket#prefix}.

---

### S3BucketLifecycleRuleExpiration <a name="S3BucketLifecycleRuleExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleExpiration {
    string Date = null,
    double Days = null,
    bool|IResolvable ExpiredObjectDeleteMarker = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.date">Date</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#date S3Bucket#date}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#days S3Bucket#days}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker">ExpiredObjectDeleteMarker</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}. |

---

##### `Date`<sup>Optional</sup> <a name="Date" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.date"></a>

```csharp
public string Date { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#date S3Bucket#date}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#days S3Bucket#days}.

---

##### `ExpiredObjectDeleteMarker`<sup>Optional</sup> <a name="ExpiredObjectDeleteMarker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration.property.expiredObjectDeleteMarker"></a>

```csharp
public bool|IResolvable ExpiredObjectDeleteMarker { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#expired_object_delete_marker S3Bucket#expired_object_delete_marker}.

---

### S3BucketLifecycleRuleNoncurrentVersionExpiration <a name="S3BucketLifecycleRuleNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleNoncurrentVersionExpiration {
    double Days = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#days S3Bucket#days}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#days S3Bucket#days}.

---

### S3BucketLogging <a name="S3BucketLogging" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLogging {
    string TargetBucket,
    string TargetPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetBucket">TargetBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetPrefix">TargetPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}. |

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetBucket"></a>

```csharp
public string TargetBucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#target_bucket S3Bucket#target_bucket}.

---

##### `TargetPrefix`<sup>Optional</sup> <a name="TargetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging.property.targetPrefix"></a>

```csharp
public string TargetPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#target_prefix S3Bucket#target_prefix}.

---

### S3BucketVersioning <a name="S3BucketVersioning" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketVersioning {
    bool|IResolvable Enabled = null,
    bool|IResolvable MfaDelete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#enabled S3Bucket#enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.mfaDelete">MfaDelete</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#enabled S3Bucket#enabled}.

---

##### `MfaDelete`<sup>Optional</sup> <a name="MfaDelete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning.property.mfaDelete"></a>

```csharp
public bool|IResolvable MfaDelete { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#mfa_delete S3Bucket#mfa_delete}.

---

### S3BucketWebsite <a name="S3BucketWebsite" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketWebsite {
    string ErrorDocument = null,
    string IndexDocument = null,
    string RedirectAllRequestsTo = null,
    string RoutingRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.errorDocument">ErrorDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#error_document S3Bucket#error_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.indexDocument">IndexDocument</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#index_document S3Bucket#index_document}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo">RedirectAllRequestsTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.routingRules">RoutingRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}. |

---

##### `ErrorDocument`<sup>Optional</sup> <a name="ErrorDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.errorDocument"></a>

```csharp
public string ErrorDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#error_document S3Bucket#error_document}.

---

##### `IndexDocument`<sup>Optional</sup> <a name="IndexDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.indexDocument"></a>

```csharp
public string IndexDocument { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#index_document S3Bucket#index_document}.

---

##### `RedirectAllRequestsTo`<sup>Optional</sup> <a name="RedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.redirectAllRequestsTo"></a>

```csharp
public string RedirectAllRequestsTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#redirect_all_requests_to S3Bucket#redirect_all_requests_to}.

---

##### `RoutingRules`<sup>Optional</sup> <a name="RoutingRules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite.property.routingRules"></a>

```csharp
public string RoutingRules { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.51/docs/resources/s3_bucket#routing_rules S3Bucket#routing_rules}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketCorsRuleList <a name="S3BucketCorsRuleList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketCorsRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get"></a>

```csharp
private S3BucketCorsRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleList.property.internalValue"></a>

```csharp
public IResolvable|S3BucketCorsRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>[]

---


### S3BucketCorsRuleOutputReference <a name="S3BucketCorsRuleOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketCorsRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders">ResetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders">ResetExposeHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds">ResetMaxAgeSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetAllowedHeaders"></a>

```csharp
private void ResetAllowedHeaders()
```

##### `ResetExposeHeaders` <a name="ResetExposeHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetExposeHeaders"></a>

```csharp
private void ResetExposeHeaders()
```

##### `ResetMaxAgeSeconds` <a name="ResetMaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.resetMaxAgeSeconds"></a>

```csharp
private void ResetMaxAgeSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput">ExposeHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput">MaxAgeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders">ExposeHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds">MaxAgeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposeHeadersInput`<sup>Optional</sup> <a name="ExposeHeadersInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeadersInput"></a>

```csharp
public string[] ExposeHeadersInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeSecondsInput`<sup>Optional</sup> <a name="MaxAgeSecondsInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSecondsInput"></a>

```csharp
public double MaxAgeSecondsInput { get; }
```

- *Type:* double

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposeHeaders`<sup>Required</sup> <a name="ExposeHeaders" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.exposeHeaders"></a>

```csharp
public string[] ExposeHeaders { get; }
```

- *Type:* string[]

---

##### `MaxAgeSeconds`<sup>Required</sup> <a name="MaxAgeSeconds" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.maxAgeSeconds"></a>

```csharp
public double MaxAgeSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketCorsRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketCorsRule">S3BucketCorsRule</a>

---


### S3BucketLifecycleRuleExpirationList <a name="S3BucketLifecycleRuleExpirationList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleExpirationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get"></a>

```csharp
private S3BucketLifecycleRuleExpirationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleExpiration[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>[]

---


### S3BucketLifecycleRuleExpirationOutputReference <a name="S3BucketLifecycleRuleExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate">ResetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker">ResetExpiredObjectDeleteMarker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDate` <a name="ResetDate" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDate"></a>

```csharp
private void ResetDate()
```

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetExpiredObjectDeleteMarker` <a name="ResetExpiredObjectDeleteMarker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.resetExpiredObjectDeleteMarker"></a>

```csharp
private void ResetExpiredObjectDeleteMarker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput">DateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput">ExpiredObjectDeleteMarkerInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker">ExpiredObjectDeleteMarker</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateInput`<sup>Optional</sup> <a name="DateInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.dateInput"></a>

```csharp
public string DateInput { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `ExpiredObjectDeleteMarkerInput`<sup>Optional</sup> <a name="ExpiredObjectDeleteMarkerInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarkerInput"></a>

```csharp
public bool|IResolvable ExpiredObjectDeleteMarkerInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `ExpiredObjectDeleteMarker`<sup>Required</sup> <a name="ExpiredObjectDeleteMarker" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.expiredObjectDeleteMarker"></a>

```csharp
public bool|IResolvable ExpiredObjectDeleteMarker { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleExpiration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>

---


### S3BucketLifecycleRuleList <a name="S3BucketLifecycleRuleList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get"></a>

```csharp
private S3BucketLifecycleRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleList.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLifecycleRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>[]

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationList <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleNoncurrentVersionExpirationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get"></a>

```csharp
private S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleNoncurrentVersionExpiration[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>[]

---


### S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference <a name="S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleNoncurrentVersionExpiration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>

---


### S3BucketLifecycleRuleOutputReference <a name="S3BucketLifecycleRuleOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLifecycleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration">PutExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration">PutNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays">ResetAbortIncompleteMultipartUploadDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration">ResetNoncurrentVersionExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpiration` <a name="PutExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration"></a>

```csharp
private void PutExpiration(IResolvable|S3BucketLifecycleRuleExpiration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putExpiration.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>[]

---

##### `PutNoncurrentVersionExpiration` <a name="PutNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration"></a>

```csharp
private void PutNoncurrentVersionExpiration(IResolvable|S3BucketLifecycleRuleNoncurrentVersionExpiration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.putNoncurrentVersionExpiration.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>[]

---

##### `ResetAbortIncompleteMultipartUploadDays` <a name="ResetAbortIncompleteMultipartUploadDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetAbortIncompleteMultipartUploadDays"></a>

```csharp
private void ResetAbortIncompleteMultipartUploadDays()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNoncurrentVersionExpiration` <a name="ResetNoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetNoncurrentVersionExpiration"></a>

```csharp
private void ResetNoncurrentVersionExpiration()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration">Expiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList">S3BucketLifecycleRuleExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration">NoncurrentVersionExpiration</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList">S3BucketLifecycleRuleNoncurrentVersionExpirationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput">AbortIncompleteMultipartUploadDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput">ExpirationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput">NoncurrentVersionExpirationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays">AbortIncompleteMultipartUploadDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expiration"></a>

```csharp
public S3BucketLifecycleRuleExpirationList Expiration { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpirationList">S3BucketLifecycleRuleExpirationList</a>

---

##### `NoncurrentVersionExpiration`<sup>Required</sup> <a name="NoncurrentVersionExpiration" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpiration"></a>

```csharp
public S3BucketLifecycleRuleNoncurrentVersionExpirationList NoncurrentVersionExpiration { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpirationList">S3BucketLifecycleRuleNoncurrentVersionExpirationList</a>

---

##### `AbortIncompleteMultipartUploadDaysInput`<sup>Optional</sup> <a name="AbortIncompleteMultipartUploadDaysInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDaysInput"></a>

```csharp
public double AbortIncompleteMultipartUploadDaysInput { get; }
```

- *Type:* double

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.expirationInput"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleExpiration[] ExpirationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleExpiration">S3BucketLifecycleRuleExpiration</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NoncurrentVersionExpirationInput`<sup>Optional</sup> <a name="NoncurrentVersionExpirationInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.noncurrentVersionExpirationInput"></a>

```csharp
public IResolvable|S3BucketLifecycleRuleNoncurrentVersionExpiration[] NoncurrentVersionExpirationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleNoncurrentVersionExpiration">S3BucketLifecycleRuleNoncurrentVersionExpiration</a>[]

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `AbortIncompleteMultipartUploadDays`<sup>Required</sup> <a name="AbortIncompleteMultipartUploadDays" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.abortIncompleteMultipartUploadDays"></a>

```csharp
public double AbortIncompleteMultipartUploadDays { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLifecycleRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLifecycleRule">S3BucketLifecycleRule</a>

---


### S3BucketLoggingList <a name="S3BucketLoggingList" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get"></a>

```csharp
private S3BucketLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingList.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLogging[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>[]

---


### S3BucketLoggingOutputReference <a name="S3BucketLoggingOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix">ResetTargetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetPrefix` <a name="ResetTargetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.resetTargetPrefix"></a>

```csharp
private void ResetTargetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput">TargetBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput">TargetPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket">TargetBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix">TargetPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetBucketInput`<sup>Optional</sup> <a name="TargetBucketInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucketInput"></a>

```csharp
public string TargetBucketInput { get; }
```

- *Type:* string

---

##### `TargetPrefixInput`<sup>Optional</sup> <a name="TargetPrefixInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefixInput"></a>

```csharp
public string TargetPrefixInput { get; }
```

- *Type:* string

---

##### `TargetBucket`<sup>Required</sup> <a name="TargetBucket" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetBucket"></a>

```csharp
public string TargetBucket { get; }
```

- *Type:* string

---

##### `TargetPrefix`<sup>Required</sup> <a name="TargetPrefix" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.targetPrefix"></a>

```csharp
public string TargetPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLoggingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketLogging InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketLogging">S3BucketLogging</a>

---


### S3BucketVersioningOutputReference <a name="S3BucketVersioningOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketVersioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete">ResetMfaDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMfaDelete` <a name="ResetMfaDelete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.resetMfaDelete"></a>

```csharp
private void ResetMfaDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput">MfaDeleteInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete">MfaDelete</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MfaDeleteInput`<sup>Optional</sup> <a name="MfaDeleteInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDeleteInput"></a>

```csharp
public bool|IResolvable MfaDeleteInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `MfaDelete`<sup>Required</sup> <a name="MfaDelete" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.mfaDelete"></a>

```csharp
public bool|IResolvable MfaDelete { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioningOutputReference.property.internalValue"></a>

```csharp
public S3BucketVersioning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketVersioning">S3BucketVersioning</a>

---


### S3BucketWebsiteOutputReference <a name="S3BucketWebsiteOutputReference" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new S3BucketWebsiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument">ResetErrorDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument">ResetIndexDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo">ResetRedirectAllRequestsTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules">ResetRoutingRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetErrorDocument` <a name="ResetErrorDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetErrorDocument"></a>

```csharp
private void ResetErrorDocument()
```

##### `ResetIndexDocument` <a name="ResetIndexDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetIndexDocument"></a>

```csharp
private void ResetIndexDocument()
```

##### `ResetRedirectAllRequestsTo` <a name="ResetRedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRedirectAllRequestsTo"></a>

```csharp
private void ResetRedirectAllRequestsTo()
```

##### `ResetRoutingRules` <a name="ResetRoutingRules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.resetRoutingRules"></a>

```csharp
private void ResetRoutingRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput">ErrorDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput">IndexDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput">RedirectAllRequestsToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput">RoutingRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument">ErrorDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument">IndexDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo">RedirectAllRequestsTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules">RoutingRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorDocumentInput`<sup>Optional</sup> <a name="ErrorDocumentInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocumentInput"></a>

```csharp
public string ErrorDocumentInput { get; }
```

- *Type:* string

---

##### `IndexDocumentInput`<sup>Optional</sup> <a name="IndexDocumentInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocumentInput"></a>

```csharp
public string IndexDocumentInput { get; }
```

- *Type:* string

---

##### `RedirectAllRequestsToInput`<sup>Optional</sup> <a name="RedirectAllRequestsToInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsToInput"></a>

```csharp
public string RedirectAllRequestsToInput { get; }
```

- *Type:* string

---

##### `RoutingRulesInput`<sup>Optional</sup> <a name="RoutingRulesInput" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRulesInput"></a>

```csharp
public string RoutingRulesInput { get; }
```

- *Type:* string

---

##### `ErrorDocument`<sup>Required</sup> <a name="ErrorDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.errorDocument"></a>

```csharp
public string ErrorDocument { get; }
```

- *Type:* string

---

##### `IndexDocument`<sup>Required</sup> <a name="IndexDocument" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.indexDocument"></a>

```csharp
public string IndexDocument { get; }
```

- *Type:* string

---

##### `RedirectAllRequestsTo`<sup>Required</sup> <a name="RedirectAllRequestsTo" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.redirectAllRequestsTo"></a>

```csharp
public string RedirectAllRequestsTo { get; }
```

- *Type:* string

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.routingRules"></a>

```csharp
public string RoutingRules { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsiteOutputReference.property.internalValue"></a>

```csharp
public S3BucketWebsite InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3Bucket.S3BucketWebsite">S3BucketWebsite</a>

---



